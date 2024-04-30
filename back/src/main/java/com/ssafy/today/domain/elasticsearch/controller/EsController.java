package com.ssafy.today.domain.elasticsearch.controller;

import co.elastic.clients.elasticsearch.core.UpdateRequest;
import com.ssafy.today.domain.elasticsearch.dto.request.DiaryEsRequest;
import com.ssafy.today.domain.elasticsearch.service.EsService;
import com.ssafy.today.util.response.SuccessCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

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
//    public ResponseEntity<?> updateDiary(@RequestBody Long diaryId) throws IOException {
//        String c = "change content";
//        UpdateRequest request = new UpdateRequest("diary", diaryId)
//                .doc("content", c);
//    }
}
