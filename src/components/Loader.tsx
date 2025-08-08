import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <div className="box-load1" />
        <div className="box-load2" />
        <div className="box-load3" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center; /* center horizontal */
  align-items: center;
  margin-top: 0; /* biar nempel ke atas jika perlu */

  .loader {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s;
    gap: 1.1rem; /* biar dot rata, bukan pakai margin-left */
  }

  .loader div {
    background-color: rgb(34, 34, 34);
    box-shadow: inset 2px 2px 10px black;
    border-radius: 100%;
    height: 1rem;
    width: 1rem;
    transition: background 0.2s;
  }

  .box-load1 {
    animation: brighten 1.2s infinite;
  }
  .box-load2 {
    animation: brighten 1.2s infinite;
    animation-delay: .2s;
  }
  .box-load3 {
    animation: brighten 1.2s infinite;
    animation-delay: .4s;
  }

  @keyframes brighten {
    100% {
      background-color: rgb(165, 165, 165);
      box-shadow: none;
    }
  }
`;

export default Loader;
