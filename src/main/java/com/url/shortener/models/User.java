package com.url.shortener.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Data
@Table(name = "users",
        uniqueConstraints = {
        @UniqueConstraint(columnNames = "username")
        }
      )
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String email;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false)
    private String password;
    private String role = "ROLE_USER";

    public String getRole() {
        return role;
    }


}
