package com.system_jc.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Principal {
    @GetMapping("/api")
    public String home(){
        return "Hello World";
    }

    @GetMapping("/api2")
    public String home2(){
        return "Hello World 2";
    }

    @GetMapping("/api3")
    public String home3(){
        return "Hello World 3";
    }
}
