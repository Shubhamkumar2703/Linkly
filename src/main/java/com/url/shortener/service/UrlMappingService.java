package com.url.shortener.service;

import com.url.shortener.dtos.UrlMappingDTO;
import com.url.shortener.models.UrlMapping;
import com.url.shortener.models.User;
import com.url.shortener.repository.UrlMappingRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Random;

@Service
public class UrlMappingService {

    private UrlMappingRepository urlMappingRepository;
    public UrlMappingDTO createShortUrl(String originalUrl) {
        String shortUrl = generateShortUrl();
        UrlMapping urlMapping = new UrlMapping();
        urlMapping.setOriginalUrl(originalUrl);
        urlMapping.setUser(User);
        urlMapping.setCreateDate(LocalDateTime.now());
        urlMapping.setShortUrl(shortUrl);
        UrlMapping savedUrlMapping = urlMappingRepository.save(urlMapping);

        return convertToDto(urlMapping);
    }

    private UrlMappingDTO convertToDto(UrlMapping urlMapping){
        UrlMappingDTO urlMappingDTO = new UrlMappingDTO();
        urlMappingDTO.setId(urlMapping.getId());
        urlMappingDTO.setOriginalUrl(urlMapping.getOriginalUrl());
        urlMappingDTO.setShortUrl(urlMapping.getShortUrl());
        urlMappingDTO.setClickCount(urlMapping.getClickCount());
        urlMappingDTO.setCreatedDate(urlMapping.getCreateDate());
        urlMappingDTO.setUsername(urlMapping.getUser().getUsername());
        return urlMappingDTO;
    }

    private String generateShortUrl(){
        String characters = "ABCDEFGHIJKLMNOPQSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        Random random = new Random();
        StringBuilder shortUrl = new StringBuilder(8);

        for(int i = 0; i < 8; i++){
            shortUrl.append(characters.charAt(random.nextInt(characters.length())));
        }
        return shortUrl.toString();
    }
}
