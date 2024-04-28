package com.ssafy.today.domain.calender.service;

import com.ssafy.today.domain.calender.dto.response.CalenderResponse;
import com.ssafy.today.domain.diary.entity.Diary;
import com.ssafy.today.domain.diary.repository.DiaryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class CalenderService {

    private final DiaryRepository diaryRepository;
    public List<CalenderResponse> getDiaryMemberIdAndDay(Long memberId, LocalDate day){
        LocalDateTime startOfDay = day.atStartOfDay();
        LocalDateTime endOfDay = day.atTime(LocalTime.MAX);

        List<Diary> diaries = diaryRepository.findAllByMemberIdAndCreatedAtBetween(memberId, startOfDay, endOfDay);
        return diaries.stream()
                .map(CalenderResponse::fromEntity)
                .collect(Collectors.toList());
    }

}
