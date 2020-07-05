package com.example.wxf.javademo.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController{
    @RequestMapping("/index")
    public String Index(){
        return "你好";
    }
    @RequestMapping("/{n}/index.html")
    public String Index2(@pathVariable String n){
        return "你好："+n;
    }
}