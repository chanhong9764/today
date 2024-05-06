package com.ssafy.today.domain.elasticsearch.service;

import com.ssafy.today.domain.elasticsearch.dto.request.DeleteRequest;
import com.ssafy.today.domain.elasticsearch.dto.request.DiaryEsRequest;
import com.ssafy.today.domain.elasticsearch.dto.request.SearchRequest;
import com.ssafy.today.domain.elasticsearch.dto.request.UpdateDiaryRequest;
import com.ssafy.today.domain.elasticsearch.dto.response.SearchResponse;
import com.ssafy.today.domain.elasticsearch.entity.DiaryEs;
import com.ssafy.today.domain.elasticsearch.repository.EsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class EsService {

    @Autowired
    private EsRepository esRepository;

    public void saveEs(DiaryEsRequest diaryEsRequest) {
        esRepository.save(DiaryEs.builder()
            .content(diaryEsRequest.getContent())
            .memberId(diaryEsRequest.getMemberId())
            .diaryId(diaryEsRequest.getDiaryId())
            .imgUrl(diaryEsRequest.getImgUrl())
            .createdAt(diaryEsRequest.getCreatedAt())
            .build());
    }

    public void update(UpdateDiaryRequest updateDiaryRequest) {
        DiaryEs diaryEs = esRepository.findByMemberIdAndDiaryId(updateDiaryRequest.getMemberId(), updateDiaryRequest.getDiaryId());
        esRepository.deleteByMemberIdAndDiaryId(updateDiaryRequest.getMemberId(), updateDiaryRequest.getDiaryId());
        saveEs(DiaryEsRequest.builder()
                .content(updateDiaryRequest.getContent())
                .memberId(diaryEs.getMemberId())
                .diaryId(diaryEs.getDiaryId())
                .imgUrl(diaryEs.getImgUrl())
                .createdAt(diaryEs.getCreatedAt())
                .build());
    }

    public List<SearchResponse> search(SearchRequest searchRequest) {
        List<DiaryEs> diaryEsList = esRepository.findAllByMemberIdAndContentContaining(searchRequest.getMemberId(), searchRequest.getKeyword());
        List<SearchResponse> searchRes = new ArrayList<>();

        for(DiaryEs de : diaryEsList) {
            searchRes.add(SearchResponse.fromEntity(de));
        }

        return searchRes;
    }

    public void delete(DeleteRequest deleteRequest) {
        esRepository.deleteByMemberIdAndDiaryId(deleteRequest.getMemberId(), deleteRequest.getDiaryId());
    }
}
