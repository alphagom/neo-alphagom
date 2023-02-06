import React, { useState, useEffect } from "react";
import axios from 'axios';
import HeartButton from "./buttons/HeartButtons";

// props 타입지정
const Post = (props: object) => {

  const [like, setLike] = useState(false)
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:8080/api/v1/liked-list')
      if (res.data.type === 'liked') setLike(true)
    }
    fetchData()
  }, []);
  
  const toggleLike = async (e: any) => {
    const res = await axios.post('http://localhost:8080/api/v1/liked-list') // [POST] 사용자가 좋아요를 누름 -> DB 갱신
    setLike(!like)
  }

  return (
  <>
    <HeartButton like={like} onClick={toggleLike}/>
  </>
  );
};

export default Post;
