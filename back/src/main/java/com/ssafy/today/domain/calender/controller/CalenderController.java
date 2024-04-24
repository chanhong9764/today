package com.ssafy.today.domain.calender.controller;

import com.ssafy.today.util.response.SuccessCode;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;

import static com.ssafy.today.util.response.SuccessResponseEntity.getResponseEntity;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/calenders")
public class CalenderController {

    @GetMapping("/{date}")
    public ResponseEntity<?> getDiariesMonth(HttpServletRequest request, @PathVariable("date") LocalDate date){
        Long memberId = (Long) request.getAttribute("memberId");
        // TODO : 해당 memberId의 한달간의 일기 정보 가져오기(이미지, 날짜)

        return getResponseEntity(SuccessCode.OK);
    }

    @GetMapping("/day/{date}")
    public ResponseEntity<?> getDiariesDay(HttpServletRequest request, @PathVariable("date") LocalDate date){
        Long memberId = (Long) request.getAttribute("memberId");
        // TODO : 해당 memberId의 한달간의 일기 정보 가져오기(이미지, 날짜)

        return getResponseEntity(SuccessCode.OK);
    }
}
