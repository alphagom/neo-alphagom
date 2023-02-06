import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil'
import axios from 'axios';
// import { Link } from 'react-router-dom';

// atom 과 selector import
import { pfListState } from 'store/portfolioListState'
// 사용할 type import
import {CardDataType} from 'store/portfolioListType'

function PortfolioCardsList(){
	const [data, setData] = useState([]);  
  
  // mocking 하기
  useEffect(() => {
    const fetchData = async() => {
      const res = await axios.get('http://localhost:8080/api/v1/portfolio-list');
      return res.data;
    }	
    
    fetchData().then(res => setData(res));
  }, []);
  
  return (
    <div className="portfolio-cards-list">
      <span>        
        {data.map((item: CardDataType) => (
          // to 부분: item.cover로 보내면 되려나? 개별 포트폴리오 링크 어떻게 되지?
          // <Link key={item.portfolioSeq} to={`${item.portfolioSeq}`}>{item.cover}</Link>         
          <div className='card' key={item.portfolioSeq}>{item.cover}</div>
        ))}
      </span>
    </div>
    )
}

export default {PortfolioCardsList}

