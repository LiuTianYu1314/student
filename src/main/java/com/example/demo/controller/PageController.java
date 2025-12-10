package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PageController {

    // 处理所有前端路由，返回index.html
    @RequestMapping(value = {"/", "/{path:[^\\.]*}"})
    public String forword() {
        return "forword:/index.html";
    }
}
