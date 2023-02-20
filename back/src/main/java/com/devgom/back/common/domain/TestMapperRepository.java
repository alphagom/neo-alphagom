package com.devgom.back.common.domain;

import com.devgom.back.common.dto.TestMapperDTO;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface TestMapperRepository {

    // 방법1. mapper를 호출하는 방식
    void save1(TestMapperDTO testMapperDTO);

    // 방법2. mapper를 호출하지 않고 여기서 쿼리까지 수행하는 방식
    // 아래같이 코드를 작성하면 mapper에 내용을 추가하지 않아도 됨
    // 사용하고자 하는 쿼리 종류(insert, select 등)에 맞춰 어노테이션을 붙여야함
    @Insert("insert into test(test_name) values (#{test_name})")
    void save2(TestMapperDTO testMapperDTO);
}
