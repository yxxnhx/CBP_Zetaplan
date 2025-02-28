import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import columnData from './../../db/column.json'
import { useState, useEffect } from 'react';
import './../../styles/main/NewsColumn.scss';
import thumbnail from '../../img/notice/notice_thumbnail_long.png';
import { useNavigate } from 'react-router-dom';

const MainColumn = () => {
  const navigate = useNavigate();
  const columnDivideDb = columnData.slice(0, 15);
  const [columnDb, setColumnDb] = useState([]);
  useEffect(()=>{
    setColumnDb(columnDivideDb);
  }, [])

  const navigationBtn = {
    nextEl: '.prev',
    prevEl: '.next',
  };


  return (
    <div className='mainNCWrapper'>
      <Swiper className='mySlider mainNCSlide'
        modules={[Navigation, Pagination]}
        navigation={navigationBtn}
        loop={true}
        spaceBetween={100}
        slidesPerView={4}
        breakpoints={{
          1500:{
            spaceBetween:100,
            slidesPerView:4
          },
          1300:{
            spaceBetween:150,
            slidesPerView:4
          },
          1200:{
            spaceBetween:50,
            slidesPerView:3
          },
          950:{
            spaceBetween:70,
            slidesPerView:3
          },

          
          900: {
            spaceBetween:10,
            slidesPerView:2.7
          },
          600: {
            spaceBetween:10,
            slidesPerView:2.5
          },
          400: {
            spaceBetween:10,
            slidesPerView:1.5
          },
          100: {
            spaceBetween:10,
            slidesPerView:1.3
          },

        }}
      >
        <div className="allSliderArea">
          {
            columnDb.map((data, i) => {
              return (
                <SwiperSlide key={data.id}>
                  <div className="mainNClListBox" onClick={()=> navigate(`/news/column/${data.id}`)}>
                    <div className="mainNCTxt">
                      <div className="mainNCCategory">{data.category}</div>
                      <div className="mainNCTitle">{data.title}</div>
                      <div className="mainNCDate">{data.createdAt}</div>
                    </div>
                    <div className="mainNCDimmed"></div>
                    <div className="mainNCBg">
                      {
                        data.img.length === 0 ? <img className='thumbnail' src={thumbnail} alt="뉴스 칼럼 대표 이미지" /> : <img className='thumbnail' src={data.img} alt="칼럼"/>
                      }
                    </div>
                  </div>
                </SwiperSlide>
              )
            })
          }
        </div>
        <div className="newsColumnBtn">
          <button type='button' className='prev'>Prev</button>
          <button type='button' className='next'>Next</button>
        </div>
      </Swiper>
      
    </div>
  );
};

export default React.memo(MainColumn);