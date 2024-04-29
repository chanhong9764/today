package com.ssafy.today.domain.elasticsearch.controller;

import com.ssafy.today.domain.elasticsearch.dto.request.DiaryEsRequest;
import com.ssafy.today.domain.elasticsearch.service.EsService;
import com.ssafy.today.util.response.SuccessCode;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static com.ssafy.today.util.response.SuccessResponseEntity.getResponseEntity;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/es")
public class EsController {

    private final EsService esService;

    @PostMapping("/save")
    public ResponseEntity<?> saveEs(HttpServletRequest request, @RequestBody DiaryEsRequest diaryEsRequest){
        esService.saveEs(diaryEsRequest);
        return getResponseEntity(SuccessCode.OK);
    }
}
