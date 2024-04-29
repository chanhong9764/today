package com.ssafy.today.domain.search.service;

import com.ssafy.today.domain.search.entity.DiaryES;
import com.ssafy.today.domain.search.repository.SearchRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SearchService {

    private final SearchRepository searchRepository;

    public void saveDiary(DiaryES diary) {
        searchRepository.save(diary);
    }

//    public List<DiaryES> findDiary() {
//
//    }
}
