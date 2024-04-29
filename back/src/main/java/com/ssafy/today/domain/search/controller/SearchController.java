package com.ssafy.today.domain.search.controller;

import com.ssafy.today.domain.search.service.SearchService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/search")
public class SearchController {

    private final SearchService searchService;
}
