package com.ssafy.today.domain.analysis.service;

import com.ssafy.today.domain.analysis.dto.response.AnalysisResponse;
import com.ssafy.today.domain.analysis.repository.AnalysisRepository;
import com.ssafy.today.domain.calendar.dto.response.CalendarResponse;
import com.ssafy.today.domain.diary.repository.DiaryRepository;
import com.ssafy.today.domain.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class AnalysisService {

    private final DiaryRepository diaryRepository;
    private final MemberRepository memberRepository;
    private final AnalysisRepository analysisRepository;


    public List<AnalysisResponse> getAnalysisMemberIdAndMonth(Long memberId, LocalDate date) {

        return null;
    }

    public List<AnalysisResponse> getDiaryMemberIdAndDay(Long memberId, LocalDate date) {

        return null;
    }

    public void createAnalysis(Long memberId){

    }
}
