package com.ssafy.today.domain.elasticsearch.controller;

import com.ssafy.today.domain.elasticsearch.dto.request.DeleteRequest;
import com.ssafy.today.domain.elasticsearch.dto.request.DiaryEsRequest;
import com.ssafy.today.domain.elasticsearch.dto.request.SearchRequest;
import com.ssafy.today.domain.elasticsearch.dto.request.UpdateDiaryRequest;
import com.ssafy.today.domain.elasticsearch.dto.response.SearchResponse;
import com.ssafy.today.domain.elasticsearch.service.EsService;
import com.ssafy.today.util.response.SuccessCode;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @PatchMapping("/update/test")
    public ResponseEntity<?> updateTest(@RequestBody UpdateDiaryRequest updateDiaryRequest) {
        esService.update(updateDiaryRequest);

        return getResponseEntity(SuccessCode.OK);
    }

    @PostMapping("/search/test")
    public ResponseEntity<?> searchTest(@RequestBody SearchRequest searchRequest) {
        List<SearchResponse> searchRes = esService.search(searchRequest);
        return getResponseEntity(SuccessCode.OK, searchRes);
    }

    @PostMapping("/search")
    public ResponseEntity<?> search(HttpServletRequest request, @RequestBody String keyword) {
        Long memberId = (Long) request.getAttribute("memberId");
        List<SearchResponse> searchRes = esService.search(SearchRequest.builder()
                .keyword(keyword)
                .memberId(memberId)
                .build());
        return getResponseEntity(SuccessCode.OK, searchRes);
    }

    @DeleteMapping("/delete/test")
    public ResponseEntity<?> deleteTest(HttpServletRequest request, @RequestBody DeleteRequest deleteRequest) {
        esService.delete(deleteRequest);
        return getResponseEntity(SuccessCode.OK);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> delete(HttpServletRequest request, @RequestBody Long diaryId) {
        Long memberId = (Long) request.getAttribute("memberId");
        esService.delete(DeleteRequest.builder()
                .memberId(memberId)
                .diaryId(diaryId)
                .build());
        return getResponseEntity(SuccessCode.OK);
    }

}
