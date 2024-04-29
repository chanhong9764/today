package com.ssafy.today.domain.diary.service;

import com.ssafy.today.domain.diary.dto.request.DiaryUpdateRequest;
import com.ssafy.today.domain.diary.dto.response.DiaryResponse;
import com.ssafy.today.domain.diary.entity.Diary;
import com.ssafy.today.domain.diary.repository.DiaryRepository;
import com.ssafy.today.util.response.ErrorCode;
import com.ssafy.today.util.response.exception.GlobalException;
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

}
