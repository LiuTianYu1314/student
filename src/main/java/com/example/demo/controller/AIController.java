package com.example.demo.controller;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/ai")
@CrossOrigin(origins = "*")
@SuppressWarnings("unchecked")
public class AIController {
    private final String DEEPSEEK_API_URL = "https://api.deepseek.com/v1/chat/completions";
    private final String API_KEY = "sk-e24559df5e074f6290c29e6d9d155d03";
    private final RestTemplate restTemplate;

    public AIController() {
        this.restTemplate = new RestTemplate();
    }

    @PostMapping("/chat")
    public Map<String, String> chatWithAI(@RequestBody Map<String, String> request) {

        // 1. 准备请求头
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(API_KEY);

        // 2. 准备消息内容
        List<Map<String, Object>> messages = new ArrayList<>();
        Map<String, Object> userMessage = new HashMap<>();
        userMessage.put("role", "user");
        userMessage.put("content", request.get("message"));
        messages.add(userMessage);

        // 3. 准备请求体
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("model", "deepseek-chat");
        requestBody.put("messages", messages);
        requestBody.put("temperature", 0.7);
        requestBody.put("max_tokens", 2000);

        // 4. 发送请求
        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(requestBody, headers);
        ResponseEntity<Map> responseEntity = restTemplate.exchange(
                DEEPSEEK_API_URL,
                HttpMethod.POST,
                entity,
                Map.class
        );

        // 5. 解析响应
        Map<String, Object> response = responseEntity.getBody();
        List<Map<String, Object>> choices = (List<Map<String, Object>>) response.get("choices");
        Map<String, Object> firstChoice = choices.get(0);
        Map<String, Object> message = (Map<String, Object>) firstChoice.get("message");
        String content = (String) message.get("content");

        // 6. 返回结果
        Map<String, String> result = new HashMap<>();
        result.put("response", content);
        return result;
    }
}