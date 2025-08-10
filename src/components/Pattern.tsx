import React from 'react';
import styled from 'styled-components';

type Props = React.HTMLAttributes<HTMLDivElement>;

const Pattern: React.FC<Props> = ({ className, style, ...rest }) => {
  return (
    <StyledWrapper
      className={className}
      style={{ width: '100%', height: '100%', ...style }}
      {...rest}
    >
      <div className="container" />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: relative; /* referensi untuk child absolute */

  .container {
    position: absolute;
    inset: 0;                /* penuh area parent */
    background-color: #111111;
    background-image: linear-gradient(32deg, rgba(8, 8, 8, 0.74) 30px, transparent);
    background-size: 60px 60px;
    background-position: -5px -5px;
    /* optional: pointer-events: none; */
  }
`;

export default Pattern;
