import React from 'react';
import main from '../assets/jpg/main.jpeg';

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
      <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/XFV7pirD7gw'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Main;
