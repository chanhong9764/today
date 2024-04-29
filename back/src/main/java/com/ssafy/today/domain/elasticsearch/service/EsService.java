package com.ssafy.today.domain.elasticsearch.service;

import com.ssafy.today.domain.elasticsearch.dto.request.DiaryEsRequest;
import com.ssafy.today.domain.elasticsearch.entity.DiaryEs;
import com.ssafy.today.domain.elasticsearch.repository.EsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EsService {

    private final EsRepository esRepository;

    public void saveEs(DiaryEsRequest diaryEsRequest) {
        esRepository.save(DiaryEs.builder()
            .content(diaryEsRequest.getContent())
            .memberId(diaryEsRequest.getMemberId())
            .diaryId(diaryEsRequest.getDiaryId())
            .imgUrl(diaryEsRequest.getImgUrl())
            .createdAt(diaryEsRequest.getCreatedAt())
            .build());
    }
}
