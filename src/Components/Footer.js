import React from 'react';
import './Comp.css';

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-section">
          <p className="title">WhatsCooking.com</p>
          <p>
            “What’s Cooking is a place where you can please your soul and tummy with delicious food recipes of all cuisine.
            And our service is absolutely free.
          </p>
          <p>&copy; 2021 | All Rights Reserved</p>
        </div>
        <div className="footer-section">
          <p className="title">Contact Us</p>
          <p>“What’s Cooking@gmail.com</p>
          <p>+914-5324-9454</p>
          <p>2393 Street HYD</p>
        </div>
        <div className="footer-section">
          <p className="title">Socials</p>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
      </div>
    </div>
  );
}
