import React, { useEffect, useRef } from 'react';
import Lottie from "lottie-react"
import menu from "./menu.json"

export default function NavIcon() {


  return (
    <Lottie animationData={menu} className='block w-14 h-24 z-50' />
  );
}

