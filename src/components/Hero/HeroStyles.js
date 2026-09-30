import styled from 'styled-components';

export const Kicker = styled.p`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: #9cc9e3;
  margin-bottom: 16px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 15px;
  }
`;

export const CtaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 48px;
`;

export const Cta = styled.a`
  padding: 12px 24px;
  border-radius: 999px;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.33);
  background: ${(props) => props.$primary ? 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)' : 'none'};
  transition: 0.3s ease;

  &:hover {
    border-color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    padding: 8px 16px;
  }
`;

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
