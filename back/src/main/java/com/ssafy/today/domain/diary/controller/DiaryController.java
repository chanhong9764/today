package com.ssafy.today.domain.diary.controller;

import com.ssafy.today.domain.diary.dto.request.DiaryImageRequest;
import com.ssafy.today.domain.diary.dto.request.DiaryRequest;
import com.ssafy.today.domain.diary.dto.request.DiaryUpdateRequest;
import com.ssafy.today.domain.diary.dto.response.DiaryResposne;
import com.ssafy.today.domain.diary.entity.Diary;
import com.ssafy.today.domain.diary.service.DiaryService;
import com.ssafy.today.util.response.SuccessCode;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.ssafy.today.util.response.SuccessResponseEntity.getResponseEntity;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/diary")
public class DiaryController {

    private final DiaryService diaryService;

    @PostMapping("/img")
    public ResponseEntity<?> createImg(HttpServletRequest request, @RequestBody DiaryRequest diaryContentRequest){
        Long memberId = (Long) request.getAttribute("memberId");
        // TODO : gpu서버에 이미지 생성 요청 보내기
        // TODO : 이미지를 제외한 diary 생성

        return getResponseEntity(SuccessCode.OK);
    }

    @PostMapping
    public ResponseEntity<?> createDiary(HttpServletRequest request, @RequestBody DiaryImageRequest diaryRequest){
        Long memberId = (Long) request.getAttribute("memberId");
        // TODO : 다이어리에 이미지 업데이트

        return getResponseEntity(SuccessCode.OK);
    }

    @PatchMapping("/{diaryId}")
    public ResponseEntity<?> updateDiary(@RequestBody DiaryUpdateRequest diaryUpdateRequest, @PathVariable("diaryId") Long diaryId){
        diaryService.updateDiaryContent(diaryId, diaryUpdateRequest);
        return getResponseEntity(SuccessCode.OK);
    }

    @DeleteMapping("/{diaryId}")
    public ResponseEntity<?> deleteDiary(@PathVariable("diaryId") Long diaryId) {
        diaryService.deleteDiary(diaryId);
        return getResponseEntity(SuccessCode.OK);

    }

    @GetMapping("/{diaryId}")
    public ResponseEntity<?> getDiary(@PathVariable("diaryId") Long diaryId){
        // TODO : diaryId에 해당하는 다이어리 불러와서 보내주기
        DiaryResposne diaryResposne = diaryService.getDiaryById(diaryId);
        return getResponseEntity(SuccessCode.OK, diaryResposne);
    }

    //TODO : 페이징 처리한 무한스크롤 일기 불러오기 컨트롤러 구현

    @PatchMapping("/important/{diaryId}")
    public ResponseEntity<?> updateImportant(HttpServletRequest request, @PathVariable("diaryId") Long diaryId){
        Long memberId = (Long) request.getAttribute("memberId");
        // TODO : 해당 유저의 동일한 날짜의 중요일기 불러와서 서로 true, false 값 바꿔주기


        return getResponseEntity(SuccessCode.OK);
    }

}
