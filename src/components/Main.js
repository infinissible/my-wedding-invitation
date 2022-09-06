import React from 'react';
import main from '../assets/jpg/main.jpeg';
import video from '../assets/video/wedding-720.mp4';

function Main() {
  return (
    <div>
      <h1>이승진 ❤️ 이길주</h1>
      <img width={500} alt='main' src={main} />
      <h2>승진 길주 결혼식에 당신을 초대 합니다.</h2>
      <h2>
        2022. 10. 8. 토요일 오후 12:00 <br />
        전주 향교
      </h2>
      <video width={500} controls>
        <source src={video} type='video/mp4' />
      </video>
    </div>
  );
}

export default Main;
