package com.devgom.back.common.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TestMapperDTO {

    @Id
    private int test_id;
    private String test_name;

    public TestMapperDTO(String test_name) {
        this.test_name = test_name;
    }
}
