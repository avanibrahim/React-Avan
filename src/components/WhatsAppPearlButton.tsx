// WhatsAppPearlButton.tsx
import React from 'react';
import styled from 'styled-components';

type Props = {
  phone?: string;      // tanpa tanda +
  message?: string;    // pesan awal
  label?: string;      // teks pada tombol
  fullWidth?: boolean; // jika ingin width:100%
};

const WhatsAppPearlButton: React.FC<Props> = ({
  phone = '6282291325909',
  message = 'Halo saya mau tanya tentang portfolio Anda',
  label = 'Contact via WhatsApp',
  fullWidth = true,
}) => {
  const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <StyledWrapper $fullWidth={fullWidth}>
      <button
        className="button"
        type="button"
        aria-label={label}
        onClick={() => window.open(waUrl, '_blank', 'noopener')}
      >
        <div className="wrap">
          <p>
            <span>✧</span>
            <span>✦</span>
            {label}
          </p>
          <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            />
          </svg>
        </div>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<{ $fullWidth?: boolean }>`
  display: inline-block;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

  .button {
    --white: #ffe7ff;
    --bg: #080808;
    --radius: 100px;
    outline: none;
    cursor: pointer;
    border: 0;
    position: relative;
    border-radius: var(--radius);
    background-color: var(--bg);
    transition: all 0.2s ease;
    box-shadow:
      inset 0 0.3rem 0.9rem rgba(255, 255, 255, 0.3),
      inset 0 -0.1rem 0.3rem rgba(0, 0, 0, 0.7),
      inset 0 -0.4rem 0.9rem rgba(255, 255, 255, 0.5),
      0 3rem 3rem rgba(0, 0, 0, 0.3),
      0 1rem 1rem -0.6rem rgba(0, 0, 0, 0.8);
  }

  .button .wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    font-size: 18px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.85);
    padding: 16px 24px;
    border-radius: inherit;
    position: relative;
    overflow: hidden;
  }

  .button .wrap p {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 0;
    transition: all 0.2s ease;
    transform: translateY(2%);
    mask-image: linear-gradient(to bottom, white 40%, transparent);
    -webkit-mask-image: linear-gradient(to bottom, white 40%, transparent);
  }

  .button .wrap p span:nth-child(2) { display: none; }
  .button:hover .wrap p span:nth-child(1) { display: none; }
  .button:hover .wrap p span:nth-child(2) { display: inline-block; }

  .button .wrap::before,
  .button .wrap::after {
    content: "";
    position: absolute;
    transition: all 0.3s ease;
  }
  .button .wrap::before {
    left: -15%;
    right: -15%;
    bottom: 25%;
    top: -100%;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.12);
  }
  .button .wrap::after {
    left: 6%;
    right: 6%;
    top: 12%;
    bottom: 40%;
    border-radius: 22px 22px 0 0;
    box-shadow: inset 0 10px 8px -10px rgba(255, 255, 255, 0.8);
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0) 100%
    );
  }

  .button svg {
    width: 20px;
    height: 20px;
    transition: transform 0.25s ease;
    color: #fff;
  }
  .button:hover svg { transform: translateX(4px); }

  .button:hover {
    box-shadow:
      inset 0 0.3rem 0.5rem rgba(255, 255, 255, 0.4),
      inset 0 -0.1rem 0.3rem rgba(0, 0, 0, 0.7),
      inset 0 -0.4rem 0.9rem rgba(255, 255, 255, 0.7),
      0 3rem 3rem rgba(0, 0, 0, 0.3),
      0 1rem 1rem -0.6rem rgba(0, 0, 0, 0.8);
  }
  .button:hover .wrap::before { transform: translateY(-5%); }
  .button:hover .wrap::after { opacity: 0.4; transform: translateY(5%); }
  .button:hover .wrap p { transform: translateY(-4%); }

  .button:active {
    transform: translateY(4px);
    box-shadow:
      inset 0 0.3rem 0.5rem rgba(255, 255, 255, 0.5),
      inset 0 -0.1rem 0.3rem rgba(0, 0, 0, 0.8),
      inset 0 -0.4rem 0.9rem rgba(255, 255, 255, 0.4),
      0 3rem 3rem rgba(0, 0, 0, 0.3),
      0 1rem 1rem -0.6rem rgba(0, 0, 0, 0.8);
  }
`;

export default WhatsAppPearlButton;
