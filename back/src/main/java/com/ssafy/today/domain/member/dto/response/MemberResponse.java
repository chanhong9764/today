package com.ssafy.today.domain.member.dto.response;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
public class MemberResponse {

    private Long id;

    private String email;

    private String nickName;

    private LocalDateTime createAt;

    private LocalDateTime updatedAt;

    @Builder
    public MemberResponse(Long id, String email, String nickName, LocalDateTime createAt, LocalDateTime updatedAt) {
        this.id = id;
        this.email = email;
        this.nickName = nickName;
        this.createAt = createAt;
        this.updatedAt = updatedAt;
    }
}
