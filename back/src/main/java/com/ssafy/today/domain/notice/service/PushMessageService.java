package com.ssafy.today.domain.notice.service;

import com.ssafy.today.domain.notice.dto.request.PushMessageRequest;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class PushMessageService {

    public void sendPushMessage(PushMessageRequest pushMessageRequest) {

        sendMessage(makeJson(pushMessageRequest));

    }

    public void sendPushMessageBulk(List<PushMessageRequest> list) {
        StringBuilder sb = new StringBuilder();
        sb.append("[");
        int idx = 0;

        for (PushMessageRequest request : list) {
            String s = makeJson(request);
            idx++;
            sb.append(s);
            if(idx < list.size()) {
                sb.append(",");
            }
        }
        sb.append("]");

        sendMessage(sb.toString());
    }

    public String makeJson(PushMessageRequest pushMessageRequest) {
        return "{" +
                "\"to\": \"" + pushMessageRequest.getToken() + "\", " +
                "\"title\": \"" + pushMessageRequest.getTitle() + "\", " +
                "\"body\": \"" + pushMessageRequest.getBody() + "\", " +
                "\"data\": {" +
                "\"customData\": \"" + pushMessageRequest.getDiaryId() + "\"" +
                "}" +
                "}";
    }

    public void sendMessage(String s) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<String> requestEntity = new HttpEntity<>(s, headers);

        ResponseEntity<String> responseEntity = restTemplate.exchange(
                "https://exp.host/--/api/v2/push/send",
                HttpMethod.POST,
                requestEntity,
                String.class);

        HttpStatus statusCode = (HttpStatus) responseEntity.getStatusCode();
        System.out.println(statusCode);
    }

}
