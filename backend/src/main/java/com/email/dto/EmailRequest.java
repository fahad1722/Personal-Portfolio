package com.email.dto;

import lombok.Data;

@Data
public class EmailRequest {
    private String name;
    private String email;
    private String message;
}