package com.ssafy.today.domain.elasticsearch.controller;

import com.ssafy.today.domain.elasticsearch.dto.request.DiaryEsRequest;
import com.ssafy.today.domain.elasticsearch.dto.request.UpdateDiaryRequest;
import com.ssafy.today.domain.elasticsearch.service.EsService;
import com.ssafy.today.util.response.SuccessCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

import static com.ssafy.today.util.response.SuccessResponseEntity.getResponseEntity;

@RestController
@RequestMapping("/es")
public class EsController {

    @Autowired
    private EsService esService;

    @PostMapping("/save")
    public ResponseEntity<?> saveEs(@RequestBody DiaryEsRequest diaryEsRequest) {
        esService.saveEs(diaryEsRequest);
        return getResponseEntity(SuccessCode.OK);
    }

//    @PatchMapping("/update")
//    public ResponseEntity<?> updateEs(@RequestBody UpdateDiaryRequest updateDiaryRequest) {
//        System.out.println(LocalDateTime.now());
//        esService.update(updateDiaryRequest);
//        return getResponseEntity(SuccessCode.OK);
//    }
}
