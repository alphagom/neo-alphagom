package com.devgom.back.common.controller;

import com.devgom.back.common.response.Response;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/test")
@RequiredArgsConstructor
public class TestController {

    @GetMapping("")
    public Response test() {
         return Response.success();
    }

    @GetMapping("/time")
    public Response getTime() {
        Map<String, LocalDate> result = new HashMap<>();
        result.put("time", LocalDate.now());
        System.out.println("test");
        return Response.success(result);
    }
}
