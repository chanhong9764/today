package com.ssafy.today.domain.elasticsearch.service;

import com.ssafy.today.domain.elasticsearch.dto.request.DiaryEsRequest;
import com.ssafy.today.domain.elasticsearch.entity.DiaryEs;
import com.ssafy.today.domain.elasticsearch.repository.EsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

//    public void update(Long diaryId) {
//
//    }
}
