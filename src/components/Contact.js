import React, { useState } from 'react';
import kakao from '../assets/svg/kakao.png';
import qrAimee from '../assets/jpg/kakao-Aimee.jpeg';
import qrJin from '../assets/jpg/kakao-jin.jpeg';
import { useSwipeable } from 'react-swipeable';

function Contact() {
  const [showImage, setShowImage] = useState(false);
  const [whoseContact, setWhoseContact] = useState('');

  const [info] = useState([
    {
      name: '이 승 진',
      phone: '01062712833',
      email: 'infinissible@gmail.com',
      kakao: qrJin,
    },
    {
      name: '이 길 주',
      phone: '01025798055',
      email: 'gilju21@gmail.com',
      kakao: qrAimee,
    },
  ]);

  function handleClick(img) {
    setShowImage(true);
    setWhoseContact(img.target.alt);
  }

  function closeImg() {
    setShowImage(false);
  }

  const handlers = useSwipeable({
    onTap: () => closeImg(),
  });

  return (
    <div className='m-b-10 py-20'>
      <p className='gallery'>연 락 처</p>
      {info.map((src, index) => (
        <div key={`contact ${index}`} className='mt-40 flex inline relative'>
          <p className='contact'>{src.name}</p>
          <a
            className='flex align-center mx-5'
            href={`tel:${src.phone}`}
            alt='phone number'
          >
            <div className='icons8-phone'></div>
          </a>
          <a className='flex align-start mx-5' href={`sms:${src.phone}`}>
            <img
              width={50}
              src='https://img.icons8.com/ios/50/000000/sms.png'
              alt='sms'
            />
          </a>
          <div
            key={`kakao ${index}`}
            className='flex align-center mx-5'
            alt='mykakao'
          >
            <img
              width={50}
              height={50}
              src={kakao}
              alt={src.name}
              onClick={(img) => handleClick(img)}
            />
            {showImage && whoseContact === `${src.name}` && (
              <img
                {...handlers}
                className='qr'
                width={250}
                height={250}
                src={src.kakao}
                onClick={closeImg}
                alt={`QR code ${src.name}`}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Contact;
