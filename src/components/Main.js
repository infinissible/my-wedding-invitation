import React from 'react';
import main from '../assets/jpg/main.jpeg';

function Main() {
  return (
    <div>
      <h2>
        <p className='eng'>Wedding Ceremony</p>
        <p className='name'>이 승 진</p> <p className='eng and'>and</p>{' '}
        <p className='name'>이 길 주</p>
      </h2>
      <img width={350} alt='main' src={main} />
      <h2 className='name'>승진 길주 결혼식에 당신을 초대 합니다.</h2>
      <h2>
        2022. 10. 8. 토요일 오후 12:00 <br />
        전주 향교
      </h2>
      <iframe
        width='350'
        height='360'
        src='https://www.youtube.com/embed/XFV7pirD7gw'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Main;
