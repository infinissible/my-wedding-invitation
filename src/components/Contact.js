import React from 'react';
import kakao from '../assets/svg/kakao.png';

function Contact() {
  return (
    <div className='m-b-10 py-20'>
      <p className='gallery'>연 락 처</p>
      <div className='mt-40 flex inline'>
        <p className='contact'>이 승 진</p>
        <a
          className='flex align-center'
          href='tel:010-6271-2833'
          alt='phone number'
        >
          <div className='icons8-phone mx-20'></div>
        </a>
        {/* <a className='flex align-center' alt='mykakao'>
          <img width={50} height={50} src={kakao} alt='kakao' />
        </a> */}
        <a className='' href='sms:010-6271-2833'>
          <img
            width={50}
            height={50}
            src='https://img.icons8.com/ios/50/000000/sms.png'
            alt='sms'
          />
        </a>
      </div>

      <div className='mt-40'>
        <p className='contact'>이 길 주</p>
      </div>
    </div>
  );
}

export default Contact;
