import React from 'react';
import styled from 'styled-components';

const ProductCard = ({
  title = 'UIVERSE (3D UI)',
  text = 'Create, share, and use beautiful custom elements made with CSS',
  link = '#',
  bottomIcon = null,
  theme = 'white', // for future use if needed
  image = null,
}) => {
  return (
    <StyledWrapper image={image}>
      <div className="parent">
        <div className="card">
          <div className="dot" />
          {image && <div className="card-bg" />}
          {image && <div className="card-bg-overlay" />}
          <div className="logo">
            <span className="circle circle1" />
            <span className="circle circle2" />
            <span className="circle circle3" />
            <span className="circle circle4" />
            <span className="circle circle5">
              <span className="ats-text">ats</span>
            </span>
          </div>
          <div className="glass" />
          <div className="content">
            <span className="title">{title}</span>
            <span className="text">{text}</span>
          </div>
          <div className="bottom">
            <div className="bottom-icon">{bottomIcon}</div>
            <div className="view-more">
              <a href={link} className="view-more-button">View more</a>
              <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .parent {
    width: 290px;
    height: 300px;
    perspective: 1000px;
  }

  .card {
    height: 100%;
    border-radius: 50px;
    background: #fff;
    transition: all 0.5s ease-in-out;
    transform-style: preserve-3d;
    box-shadow: 0 8px 32px 0 rgba(31, 72, 120, 0.10);
    position: relative;
    overflow: hidden;
  }

  .dot {
    width: 7px;
    aspect-ratio: 1;
    position: absolute;
    background: linear-gradient(135deg, #fff, #aeefff, #38bdf8);
    box-shadow: 0 0 12px 2px #38bdf8, 0 0 4px #fff;
    border-radius: 100px;
    z-index: 10;
    right: 10%;
    top: 10%;
    animation: moveDot 6s linear infinite;
    pointer-events: none;
  }
  @keyframes moveDot {
    0%, 100% { top: 10%; right: 10%; }
    25% { top: 10%; right: calc(100% - 35px); }
    50% { top: calc(100% - 30px); right: calc(100% - 35px); }
    75% { top: calc(100% - 30px); right: 10%; }
  }

  .card-bg {
    position: absolute;
    inset: 0;
    z-index: 0;
    background-image: ${({ image }) => image ? `url(${image})` : 'none'};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50px;
    transition: background-image 0.3s;
  }

  .card-bg-overlay {
    position: absolute;
    inset: 0;
    z-index: 1;
    background: rgba(255,255,255,0.82);
    border-radius: 50px;
    pointer-events: none;
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
  }

  .logo, .glass, .content, .bottom {
    position: relative;
    z-index: 2;
  }

  .glass {
    transform-style: preserve-3d;
    position: absolute;
    inset: 8px;
    border-radius: 55px;
    border-top-right-radius: 100%;
    background: linear-gradient(0deg, rgba(255,255,255,0.4) 0%, rgba(245,247,250,0.7) 100%);
    /* -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px); */
    transform: translate3d(0px, 0px, 25px);
    border-left: 1px solid #fff;
    border-bottom: 1px solid #fff;
    transition: all 0.5s ease-in-out;
  }

  .content {
    padding: 100px 60px 0px 30px;
    transform: translate3d(0, 0, 26px);
  }

  .content .title {
    display: block;
    color: #111;
    font-weight: 900;
    font-size: 20px;
  }

  .content .text {
    display: block;
    color: #111;
    font-size: 15px;
    margin-top: 20px;
  }

  .bottom {
    padding: 10px 12px;
    transform-style: preserve-3d;
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transform: translate3d(0, 0, 26px);
  }

  .bottom-icon {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 40px;
    height: 40px;
    background: #f5f7fa;
    border-radius: 12px;
    box-shadow: 0 2px 8px 0 rgba(31, 72, 120, 0.06);
    svg {
      width: 28px;
      height: 28px;
      margin: auto;
      color: #111;
    }
  }

  .view-more {
    display: flex;
    align-items: center;
    width: 40%;
    justify-content: flex-end;
    transition: all 0.2s ease-in-out;
  }

  .view-more:hover {
    transform: translate3d(0, 0, 10px);
  }

  .view-more .view-more-button {
    background: none;
    border: none;
    color: #111;
    font-weight: bolder;
    font-size: 12px;
    text-decoration: none;
    cursor: pointer;
  }

  .view-more .svg {
    fill: none;
    stroke: #111;
    stroke-width: 3px;
    max-height: 15px;
  }

  .logo {
    position: absolute;
    right: 0;
    top: 0;
    transform-style: preserve-3d;
  }

  .logo .circle {
    display: block;
    position: absolute;
    aspect-ratio: 1;
    border-radius: 50%;
    top: 0;
    right: 0;
    box-shadow: rgba(100, 100, 111, 0.13) -10px 10px 20px 0px;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    background: linear-gradient(135deg, #eaf6ff 60%, #f5fbff 100%);
    transition: all 0.5s ease-in-out;
  }

  .logo .circle1 {
    width: 170px;
    transform: translate3d(0, 0, 20px);
    top: 8px;
    right: 8px;
  }

  .logo .circle2 {
    width: 140px;
    transform: translate3d(0, 0, 40px);
    top: 10px;
    right: 10px;
    -webkit-backdrop-filter: blur(1px);
    backdrop-filter: blur(1px);
    transition-delay: 0.4s;
  }

  .logo .circle3 {
    width: 110px;
    transform: translate3d(0, 0, 60px);
    top: 17px;
    right: 17px;
    transition-delay: 0.8s;
  }

  .logo .circle4 {
    width: 80px;
    transform: translate3d(0, 0, 80px);
    top: 23px;
    right: 23px;
    transition-delay: 1.2s;
  }

  .logo .circle5 {
    width: 50px;
    transform: translate3d(0, 0, 100px);
    top: 30px;
    right: 30px;
    display: grid;
    place-content: center;
    transition-delay: 1.6s;
  }

  .logo .circle5 .ats-text {
    font-size: 1.1rem;
    height: 32px;
    width: 32px;
    font-family: 'Inter', 'Arial Black', Arial, sans-serif;
    font-weight: 900;
    color: #111;
    letter-spacing: 0.05em;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    line-height: 1;
  }

  .parent:hover .card {
    transform: rotate3d(1, 1, 0, 30deg);
    box-shadow: 0 12px 40px 0 rgba(31, 72, 120, 0.16);
  }

  .parent:hover .card .logo .circle2 {
    transform: translate3d(0, 0, 60px);
  }

  .parent:hover .card .logo .circle3 {
    transform: translate3d(0, 0, 80px);
  }

  .parent:hover .card .logo .circle4 {
    transform: translate3d(0, 0, 100px);
  }

  .parent:hover .card .logo .circle5 {
    transform: translate3d(0, 0, 120px);
  }
`;

export default ProductCard; 