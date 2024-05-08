package com.ssafy.today.domain.diary.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.today.domain.diary.entity.Diary;
import com.ssafy.today.domain.member.entity.Member;
import com.ssafy.today.domain.tempimg.entity.TempImg;
import lombok.Builder;
import lombok.Data;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
public class DiaryContentCreated implements Serializable {
    @JsonProperty("memberId")
    private Long memberId;

    @JsonProperty("diaryId")
    private Long diaryId;

    @JsonProperty("createdAt")
    private LocalDateTime createdAt;

    @JsonProperty("imageUrl")
    private List<String> imageUrl;

    @JsonProperty("angry")
    private double angry;

    @JsonProperty("disgust")
    private double disgust;

    @JsonProperty("fear")
    private double fear;

    @JsonProperty("happiness")
    private double happiness;

    @JsonProperty("sadness")
    private double sadness;

    @JsonProperty("surprise")
    private double surprise;

    @JsonProperty("mbti")
    private String mbti;

    public TempImg toTempImgEntity(Diary diary, Member member) {
        return TempImg.builder()
                .diary(diary)
                .member(member)
                .img1(imageUrl.size() > 0 ? imageUrl.get(0) : null)
                .img2(imageUrl.size() > 1 ? imageUrl.get(1) : null)
                .img3(imageUrl.size() > 2 ? imageUrl.get(2) : null)
                .img4(imageUrl.size() > 3 ? imageUrl.get(3) : null)
                .build();
    }

}
