import React from 'react';
import main from '../assets/jpg/main.jpeg';

function Main() {
  return (
    <div>
      <div className='bgi py-20'>
        <h2>
          <p className='eng'>Wedding Ceremony</p>
          <p className='kor m-b-10'>이 승 진</p>{' '}
          <p className='eng and m-b-10'>and</p>{' '}
          <p className='kor m-b-10'>이 길 주</p>
        </h2>
        <div>
          <p>
            신랑측 혼주 <br />
            어머니 유점순
          </p>
        </div>
      </div>
      <div className='border'>
        <img width={330} alt='main' src={main} />
      </div>
      <div className='location'>
        <p className='invite py-30'>
          승진 길주의 결혼식에 당신을 초대 합니다. <br />
          2022. 10. 8. 토요일 오후 12:00 <br />
          전주 향교
        </p>
      </div>
      <div className='py-20'>
        <iframe
          width='350'
          height='250'
          src='https://www.youtube.com/embed/fARU1eXXf9I'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Main;
