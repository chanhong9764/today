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
        DiaryResponse diaryResponse = DiaryResponse.fromEntity(diary);
        diaryRepository.findAll();
        return diaryResponse;
    }

    public Page<DiaryResponse> getDiaryPage(Long memberId, Pageable pageable){
        Page<Diary> all = diaryRepository.findAllByMemberId(memberId, pageable);
        return all.map(DiaryResponse::fromEntity);

    }


}
