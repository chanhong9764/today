package com.ssafy.today.domain.analysis.service;

import com.ssafy.today.domain.analysis.dto.response.AnalysisResponse;
import com.ssafy.today.domain.analysis.entity.Analysis;
import com.ssafy.today.domain.analysis.repository.AnalysisRepository;
import com.ssafy.today.domain.diary.dto.request.DiaryContentCreated;
import com.ssafy.today.domain.diary.repository.DiaryRepository;
import com.ssafy.today.domain.member.entity.Member;
import com.ssafy.today.domain.member.repository.MemberRepository;
import com.ssafy.today.util.response.ErrorCode;
import com.ssafy.today.util.response.exception.GlobalException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class AnalysisService {

    private final DiaryRepository diaryRepository;
    private final MemberRepository memberRepository;
    private final AnalysisRepository analysisRepository;


    // 한달 동안의 통계
    public List<AnalysisResponse> getAnalysisByMemberIdAndMonth(Long memberId, LocalDate date) {

        return null;
    }

    // 하루 동안의 통계
    public List<AnalysisResponse> getAnalysisByMemberIdAndDay(Long memberId, LocalDate date) {

        return null;
    }


    public void createOrUpdateAnalysis(Long memberId, DiaryContentCreated diaryContentCreated){
        Member member = memberRepository.findById(memberId).orElseThrow(
                () -> new GlobalException(ErrorCode.MEMBER_NOT_FOUND));

        LocalDate today = diaryContentCreated.getCreatedAt().toLocalDate();
        LocalDateTime startOfDay = LocalDateTime.of(today, LocalTime.MIN);
        LocalDateTime endOfDay = LocalDateTime.of(today, LocalTime.MAX);

        if(analysisRepository.existsByMemberIdAndCreatedAtBetween(memberId, startOfDay, endOfDay)){
            // 만약 있다면 기존의 통계에 값 업데이트
            Analysis analysis = analysisRepository.findFirstByMemberIdAndCreatedAtBetween(memberId, startOfDay, endOfDay);
            for (char c : diaryContentCreated.getMbti().toCharArray()) {
                // 값에따른 값 증가
                analysis.increaseType(c);
            }
            analysis.sumEmotions(
                    diaryContentCreated.getAngry(),
                    diaryContentCreated.getDisgust(),
                    diaryContentCreated.getFear(),
                    diaryContentCreated.getHappiness(),
                    diaryContentCreated.getSadness(),
                    diaryContentCreated.getSurprise()
            );
        }else{
            // 새로운 통계 생성
            Integer e = 0, i = 0, s = 0, n = 0, f = 0, t = 0, p = 0, j = 0;
            for (char c : diaryContentCreated.getMbti().toUpperCase().toCharArray()) {
                switch (c) {
                    case 'E': e++; break;
                    case 'I': i++; break;
                    case 'S': s++; break;
                    case 'N': n++; break;
                    case 'F': f++; break;
                    case 'T': t++; break;
                    case 'P': p++; break;
                    case 'J': j++; break;
                }
            }
            Analysis analysis = Analysis.builder()
                    .member(member)
                    .count(1)
                    .e(e)
                    .i(i)
                    .s(s)
                    .n(n)
                    .f(f)
                    .t(t)
                    .p(p)
                    .j(j)
                    .angry(diaryContentCreated.getAngry())
                    .disgust(diaryContentCreated.getDisgust())
                    .fear(diaryContentCreated.getFear())
                    .happiness(diaryContentCreated.getHappiness())
                    .sadness(diaryContentCreated.getSadness())
                    .surprise(diaryContentCreated.getSurprise())
                    .build();
            analysisRepository.save(analysis);
        }

    }
}
