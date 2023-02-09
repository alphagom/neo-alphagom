import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil'
import axios from 'axios';
import '../MainPage.scss'
// import { Link } from 'react-router-dom';

// atom 과 selector import
import { pfListState } from 'store/portfolioListState'
// 사용할 type import
// import {CardDataType} from 'store/portfolioListType'

function PortfolioCardsList(){
	const [data, setData] = useState([]);  
  
  // mocking 하기
  useEffect(() => {
    const fetchData = async() => {
      const res = await axios.get('http://localhost:8080/api/v1/portfolio-list');
      return res.data.data;
    }	
    
    fetchData().then(res => setData(res));
  }, []);
  
  return (
    <div className="portfolio-cards-list">
        {data}
        {/* {data.map((item: CardDataType) => (
          // <Link key={item.portfolioSeq} to={`${item.portfolioSeq}`}>{item.cover}</Link>
          <div className='card' key={item.portfolioSeq}>{item.cover}</div>
        ))} */}
    </div>
    )
}

export default {PortfolioCardsList}

