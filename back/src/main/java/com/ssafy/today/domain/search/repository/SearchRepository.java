package com.ssafy.today.domain.search.repository;

import com.ssafy.today.domain.search.entity.DiaryES;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

import java.util.List;

public interface SearchRepository extends ElasticsearchRepository<DiaryES, String > {
    List<DiaryES> findAllByMemberIdAndContentContaining(Long memberId, String keyword);
}