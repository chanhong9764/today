package com.ssafy.today.domain.diary.controller;

import com.ssafy.today.domain.diary.service.DiaryService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class DiaryController {

    private final DiaryService diaryService;

}
