//package com.devgom.back.common.domain;
//
//import lombok.Getter;
//import org.springframework.data.annotation.CreatedDate;
//import org.springframework.data.annotation.LastModifiedDate;
//import org.springframework.data.jpa.domain.support.AuditingEntityListener;
//
//import javax.persistence.Column;
//import javax.persistence.EntityListeners;
//import javax.persistence.MappedSuperclass;
//import java.time.LocalDateTime;
//
//@Getter
//@MappedSuperclass
//@EntityListeners(AuditingEntityListener.class)
//public class BaseTimeEntity {
//    /* 모든 Entity의 상위 클래스에서 createdDate, updateDate를 자동으로 관리해주는 역할  */
//    @CreatedDate
//    @Column(updatable = false)
//    private LocalDateTime createdTime;
//
//    @LastModifiedDate
//    private LocalDateTime modifiedTime;
//}
