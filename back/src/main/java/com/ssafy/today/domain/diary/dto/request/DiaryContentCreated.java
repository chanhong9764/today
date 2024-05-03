package com.ssafy.today.domain.diary.dto.request;

import lombok.Builder;
import lombok.Data;

import java.util.List;
import java.util.Map;

@Data
@Builder
public class DiaryContentCreated {
    private List<String> imageUrl;
    private Map<String, Double> emotion;
    private String mbti;
}
