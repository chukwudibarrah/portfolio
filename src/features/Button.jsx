import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Lottie from 'lottie-web/build/player/lottie_light';
import animationData from '../assets/plusMinus.json';

const Button = ({ open, setOpen }) => {

    const animationContainer = useRef(null);
  const anim = useRef(null);

  useEffect(() => {
    if (animationContainer.current) {
      anim.current = Lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData,
      });

      return () => anim.current?.destroy();
    }
  }, []);

  const handleClick = () => {
    setOpen(!open);
    anim.current?.setDirection(open ? -1 : 1);
    anim.current?.play();
  };

  return (
    <div
      onClick={handleClick}
      ref={animationContainer}
    ></div>
  );
};





export default Button;