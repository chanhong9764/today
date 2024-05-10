package com.ssafy.today.domain.notice.dto.request;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@NoArgsConstructor
@ToString
public class PushMessageRequest {
    private String token;
    private String title;
    private String body;

    @Builder
    public PushMessageRequest(String token, String title, String body) {
        this.token = token;
        this.title = title;
        this.body = body;
    }
}
