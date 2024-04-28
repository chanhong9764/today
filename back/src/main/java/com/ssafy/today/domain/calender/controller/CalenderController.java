package com.ssafy.today.domain.calender.controller;

import com.ssafy.today.domain.calender.dto.response.CalenderResponse;
import com.ssafy.today.domain.calender.service.CalenderService;
import com.ssafy.today.domain.diary.dto.response.DiaryResponse;
import com.ssafy.today.domain.diary.repository.DiaryRepository;
import com.ssafy.today.domain.diary.service.DiaryService;
import com.ssafy.today.util.response.SuccessCode;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

import static com.ssafy.today.util.response.SuccessResponseEntity.getResponseEntity;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/calenders")
public class CalenderController {

    private final CalenderService calenderService;

    @GetMapping("/{date}")
    public ResponseEntity<?> getDiariesMonth(HttpServletRequest request, @PathVariable("date") LocalDate date){
        Long memberId = (Long) request.getAttribute("memberId");
        // TODO : 해당 memberId의 한달간의 일기 정보 가져오기
        List<CalenderResponse> diaryList = calenderService.getDiaryMemberIdAndMonth(memberId, date);
        return getResponseEntity(SuccessCode.OK, diaryList);
    }

    @GetMapping("/day/{date}")
    public ResponseEntity<?> getDiariesDay(HttpServletRequest request, @PathVariable("date") LocalDate date){
        Long memberId = (Long) request.getAttribute("memberId");
        // 해당 memberId의 하루 동안의 일기 가져오기
        List<CalenderResponse> diaryList = calenderService.getDiaryMemberIdAndDay(memberId, date);

        return getResponseEntity(SuccessCode.OK, diaryList);
    }
}
