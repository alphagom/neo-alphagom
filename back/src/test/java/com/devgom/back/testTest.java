package com.devgom.back;

import com.devgom.back.common.domain.TestMapperRepository;
import com.devgom.back.common.dto.TestMapperDTO;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
public class testTest {

    @Autowired
    private TestMapperRepository tmr;

    @Test
    @Transactional
    @Rollback
    @DisplayName("mybatis test save 테스트1")
    public void testSaveTest1() {
        TestMapperDTO testMapperDTO = new TestMapperDTO("save test1");
        tmr.save1(testMapperDTO);
        System.out.println("test save1 : " + testMapperDTO.getTest_name());
    }

    @Test
    @Transactional
    @Rollback
    @DisplayName("mybatis test save 테스트2")
    public void testSaveTest2() {
        TestMapperDTO testMapperDTO = new TestMapperDTO("save test2");
        tmr.save2(testMapperDTO);
        System.out.println("test save2 : " + testMapperDTO.getTest_name());
    }
}
