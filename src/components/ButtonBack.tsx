import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button className="learn-more">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow" />
        </span>
        <span className="button-text">Back Home</span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /* Default (light) variables */
  & {
    --btn-text: #282936;        /* warna teks */
    --btn-text-hover: #fff;     /* warna teks saat hover */
    --btn-circle: #282936;      /* warna bulatan/pill */
    --btn-arrow: #fff;          /* warna panah/garis */
  }

  /* Dark mode via class .dark pada html/body */
  :root.dark &,
  .dark & {
    --btn-text: #f5f5f7;
    --btn-text-hover: #000;
    --btn-circle: #fff;
    --btn-arrow: #000;
  }

  /* Fallback kalau tidak pakai .dark class */
  @media (prefers-color-scheme: dark) {
    :root:not(.light):not(.dark) & {
      --btn-text: #000;
      --btn-text-hover: #f5f5f7;
      --btn-circle: #000;
      --btn-arrow: #fff;
    }
  }

  button {
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    background: transparent;
    padding: 0;
    font-size: inherit;
    font-family: inherit;
  }

  button.learn-more { width: 12rem; height: auto; }

  button.learn-more .circle {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: relative;
    display: block;
    margin: 0;
    width: 3rem;
    height: 3rem;
    background: var(--btn-circle);
    border-radius: 3.125rem;
  }

  button.learn-more .circle .icon {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    background: var(--btn-arrow); /* garis panah (batang) */
  }

  button.learn-more .circle .icon.arrow {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    left: 1.2rem;
    width: 1.125rem;
    height: 0.125rem;
    background: none; /* batang kosong, cuma chevron */
  }

  /* Panah kiri (chevron "<") */
  button.learn-more .circle .icon.arrow::before {
    position: absolute;
    content: "";
    top: -0.29rem;
    left: 0.0625rem;                 /* posisikan di kiri */
    width: 0.625rem;
    height: 0.625rem;
    border-top: 0.125rem solid var(--btn-arrow);
    border-left: 0.125rem solid var(--btn-arrow);
    transform: rotate(-45deg);
  }

  button.learn-more .button-text {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    inset: 0;
    padding: 0.75rem 0;
    margin: 0 0 0 1.85rem;
    color: var(--btn-text);
    font-weight: 700;
    line-height: 1.6;
    text-align: center;
    text-transform: uppercase;
  }

  /* Hover behavior tetap: pill melebar, panah geser ke kanan */
  button:hover .circle { width: 100%; }

  button:hover .circle .icon.arrow {
    background: var(--btn-arrow);   /* batang terlihat */
    transform: translate(1rem, 0);  /* geser kanan seperti animasi asli */
  }

  button:hover .button-text { color: var(--btn-text-hover); }
`;


export default Button;
