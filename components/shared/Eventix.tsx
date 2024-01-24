"use client";

import { useEffect } from 'react';

const ShopFrame = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://shop.eventix.io/build/integrate.js';
    script.async = true;

    const shopFrame = document.getElementById('shop-frame');

    if (shopFrame) {
      shopFrame.appendChild(script);
    }

    return () => {
      if (shopFrame) {
        shopFrame.removeChild(script);
      }
    };
  }, []);

  return (
    <div id="shop-frame" data-url="https://shop.eventix.io/dc9fd3dd-6c4a-11ee-9fc1-6a57c78572ab" className="max-w-600 mx-auto"></div>
  );
}

export default ShopFrame;