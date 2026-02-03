package com.url.shortener.models;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class ClickEvent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDateTime clickDate;
    public LocalDateTime getClickDate(){
        return clickDate;
    }

    @ManyToOne
    @JoinColumn(name = "url_mapping_id")
    private UrlMapping urlMapping;
}
