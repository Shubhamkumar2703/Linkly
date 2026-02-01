package com.url.shortener.dtos;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class UrlMappingDTO {
    private String originalUrl;
    private Long id;
    private String shortUrl;
    private int clickCount;
    private LocalDateTime createdDate;
    private String username;

}
