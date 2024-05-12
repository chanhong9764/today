package com.ssafy.today.domain.notice.service;

import com.ssafy.today.domain.notice.dto.request.PushMessageRequest;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class PushMessageService {

    public void sendPushMessage(PushMessageRequest pushMessageRequest) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        String jsonBody = "{" +
                "\"to\": \"" + pushMessageRequest.getToken() + "\", " +
                "\"title\": \"" + pushMessageRequest.getTitle() + "\", " +
                "\"body\": \"" + pushMessageRequest.getBody() + "\"" +
                "}";

        HttpEntity<String> requestEntity = new HttpEntity<>(jsonBody, headers);

        ResponseEntity<String> responseEntity = restTemplate.exchange(
                "https://exp.host/--/api/v2/push/send",
                HttpMethod.POST,
                requestEntity,
                String.class);

        HttpStatus statusCode = (HttpStatus) responseEntity.getStatusCode();
        System.out.println(statusCode);
    }

}
