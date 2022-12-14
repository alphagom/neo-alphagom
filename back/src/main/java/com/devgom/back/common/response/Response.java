package com.devgom.back.common.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor(access = AccessLevel.PRIVATE)
@JsonInclude(JsonInclude.Include.NON_NULL)
@Getter
public class Response {
    private boolean status;
    private int status_code;
    private Result result;

    /* data 를 보내주지 않음 : delete 등 메서드 */
    public static Response success() {
        return new Response(true, 200, null);
    }

    /* data 를 보내줌 : create 등 메서드 */
    public static <T> Response success(T data) {
        return new Response(true, 200, new Success(data));
    }

    /* Exception Handler */
    public static Response failure(int code, String msg) {
        return new Response(false, code, new Failure(msg));
    }
}