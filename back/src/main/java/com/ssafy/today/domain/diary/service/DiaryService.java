package com.ssafy.today.domain.diary.service;

import com.fasterxml.jackson.databind.annotation.EnumNaming;
import com.ssafy.today.domain.diary.dto.request.DiaryContentCreated;
import com.ssafy.today.domain.diary.dto.request.DiaryContentRequest;
import com.ssafy.today.domain.diary.dto.request.DiaryImageRequest;
import com.ssafy.today.domain.diary.dto.request.DiaryUpdateRequest;
import com.ssafy.today.domain.diary.dto.response.DiaryResponse;
import com.ssafy.today.domain.diary.entity.Diary;
import com.ssafy.today.domain.diary.entity.MBTI;
import com.ssafy.today.domain.diary.repository.DiaryRepository;
import com.ssafy.today.domain.member.entity.Member;
import com.ssafy.today.domain.member.repository.MemberRepository;
import com.ssafy.today.global.security.oauth2.user.GoogleOAuth2UserInfo;
import com.ssafy.today.util.response.ErrorCode;
import com.ssafy.today.util.response.exception.GlobalException;
import jakarta.persistence.Enumerated;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;


@Service
@RequiredArgsConstructor
@Transactional
public class DiaryService {

    private final DiaryRepository diaryRepository;
    private final MemberRepository memberRepository;

    public DiaryResponse createDiary(Long memberId, DiaryContentRequest diaryContentRequest){
        Diary save;

        Member member = memberRepository.findById(memberId).orElseThrow(
                () -> new GlobalException(ErrorCode.MEMBER_NOT_FOUND));
        LocalDate today = LocalDate.now();
        LocalDateTime startOfDay = LocalDateTime.of(today, LocalTime.MIN);
        LocalDateTime endOfDay = LocalDateTime.of(today, LocalTime.MAX);

        if(diaryRepository.existsByImportantIsTrueAndMemberIdAndCreatedAtBetween(memberId,startOfDay,endOfDay)){
            Integer count = diaryRepository.countByMemberIdAndCreatedAtBetween(memberId, startOfDay, endOfDay);
            save = diaryRepository.save(DiaryContentRequest.toEntity(diaryContentRequest, member, false, count));
        }else{
            save = diaryRepository.save(DiaryContentRequest.toEntity(diaryContentRequest, member, true, 1));
        }
        return DiaryResponse.fromEntity(save);
    }
    public void updateDiaryContent(Long diaryId, DiaryUpdateRequest diaryUpdateRequest) {
        Diary diary = diaryRepository.findById(diaryId).orElseThrow(
                () -> new GlobalException(ErrorCode.DIARY_NOT_FOUND));
        // 변경 감지를 통한 업데이트
        diary.updateContent(diaryUpdateRequest.getContent());
    }

    public void deleteDiary(Long diaryId){
        diaryRepository.deleteById(diaryId);
    }

    public DiaryResponse getDiaryById(Long diaryId) {
        Diary diary = diaryRepository.findById(diaryId).orElseThrow(
                () -> new GlobalException(ErrorCode.DIARY_NOT_FOUND));
        return DiaryResponse.fromEntity(diary);
    }

    public Page<DiaryResponse> getDiaryPage(Long memberId, Pageable pageable){
        Page<Diary> all = diaryRepository.findAllByMemberId(memberId, pageable);
        return all.map(DiaryResponse::fromEntity);
    }

    public void updateImportantDiary(Long memberId, Long diaryId) {
        // diary1 : import 지정 될 다이어리
        Diary diary1 = diaryRepository.findById(diaryId).orElseThrow(
                () -> new GlobalException(ErrorCode.DIARY_NOT_FOUND));
        LocalDate day = diary1.getCreatedAt().toLocalDate();
        LocalDateTime startOfDay = day.atStartOfDay();
        LocalDateTime endOfDay = day.atTime(LocalTime.MAX);

        // diary2 : 기존의 import 지정 되어 있는 다이어리
        Diary diary2 = diaryRepository.findFirstByMemberIdAndCreatedAtBetweenAndImportant(memberId,startOfDay,endOfDay,true);
        if(diary2 == null){
            throw new GlobalException(ErrorCode.DIARY_NOT_FOUND);
        }
        diary1.updateImportant(true);
        diary2.updateImportant(false);
    }

    public void updateDiaryImg(DiaryImageRequest diaryRequest) {
        Diary diary = diaryRepository.findById(diaryRequest.getId()).orElseThrow(
                () -> new GlobalException(ErrorCode.DIARY_NOT_FOUND));
        diary.updateImg(diaryRequest.getImgUrl());
        diary.updateStatus(2);
    }

    /**
     * 이미지 생성후 emotion, mbti 업데이트용
     * @param diaryContentCreated
     */
    public void updateAfterCreateImg(DiaryContentCreated diaryContentCreated){
        Diary diary = diaryRepository.findById(diaryContentCreated.getDiaryId()).orElseThrow(
                () -> new GlobalException(ErrorCode.DIARY_NOT_FOUND));
        diary.updateMbti(diaryContentCreated.getMbti());
        diary.updateEmotions(
                diaryContentCreated.getAngry(),
                diaryContentCreated.getDisgust(),
                diaryContentCreated.getFear(),
                diaryContentCreated.getHappiness(),
                diaryContentCreated.getSadness(),
                diaryContentCreated.getSurprise()
        );
        diary.updateStatus(1);
    }

    /**
     * diary 소유권 검사
     * @param diaryId
     * @param memberId
     * @return
     */
    public boolean checkDiaryBelongsToMember(Long diaryId, Long memberId){
        return diaryRepository.existsByIdAndMemberId(diaryId, memberId);
    }
}
