import React from 'react';
import styled from 'styled-components';

const ACCENT = '#13ADC7';

const Wrapper = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 1.2rem;
  color: #fff;
`;

const Wordmark = styled.span`
  font-size: 2.4rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  white-space: nowrap;

  span {
    color: rgba(255, 255, 255, 0.6);
    font-weight: 400;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.8rem;
  }
`;

const Mark = styled.span`
  display: inline-flex;

  svg {
    width: 44px;
    height: 44px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    svg {
      width: 36px;
      height: 36px;
    }
  }
`;

export const LogoMark = ({ size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <rect x="2" y="2" width="44" height="44" rx="11" stroke="#fff" strokeWidth="3" />
    <polyline points="12,16 20,24 12,32" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="24" y1="16" x2="37" y2="16" stroke={ACCENT} strokeWidth="4" strokeLinecap="round" />
    <line x1="30.5" y1="16" x2="30.5" y2="33" stroke={ACCENT} strokeWidth="4" strokeLinecap="round" />
  </svg>
);

const Logo = () => (
  <Wrapper>
    <Mark>
      <LogoMark />
    </Mark>
    <Wordmark>
      Theron <span>Bueno</span>
    </Wordmark>
  </Wrapper>
);

export default Logo;
