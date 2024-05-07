package com.ssafy.today.domain.diary.controller;

import com.ssafy.today.domain.diary.dto.request.DiaryContentCreated;
import com.ssafy.today.domain.diary.dto.request.DiaryContentRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class SocketController {
    private final SimpMessagingTemplate simpMessagingTemplate;

    @MessageMapping("/diary")
    public void createDiary(DiaryContentRequest diaryContentRequest) {
        System.out.println("Diary 생성 요청");
        simpMessagingTemplate.convertAndSend("/sub/diary/fastapi", diaryContentRequest);
    }

    @MessageMapping("/diary/created")
    public void createdDiary(DiaryContentCreated diaryContentCreated){
        System.out.println("Diary 생성 완료");
        // 통계 및 DB 저장
        // 클라이언트 알람 전송
    }

    @MessageMapping("/diary/test")
    public void testDiary(){
        System.out.println("Diary 생성 완료");
        // 통계 및 DB 저장
        // 클라이언트 알람 전송
    }
}