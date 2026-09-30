import styled from 'styled-components';

export const RoleList = styled.ol`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 1rem 0 4rem;
`;

export const RoleCard = styled.li`
  border-left: 3px solid #945DD6;
  padding: 8px 0 8px 24px;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding-left: 16px;
  }
`;

export const RoleHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  gap: 4px 16px;
`;

export const RoleTitle = styled.h3`
  font-size: 28px;
  line-height: 36px;
  font-weight: 700;
  color: #fff;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 20px;
    line-height: 28px;
  }
`;

export const Company = styled.span`
  color: #9cc9e3;
  font-weight: 500;
`;

export const Period = styled.span`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.5);
  white-space: nowrap;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`;

export const Summary = styled.p`
  font-size: 18px;
  line-height: 28px;
  color: rgba(255, 255, 255, 0.75);
  margin: 8px 0 12px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 15px;
    line-height: 24px;
  }
`;

export const Highlights = styled.ul`
  padding-left: 20px;
  margin-bottom: 16px;

  li {
    list-style: disc;
  }

  li::marker {
    color: #13ADC7;
  }
`;

export const Highlight = styled.li`
  font-size: 17px;
  line-height: 28px;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 6px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 15px;
    line-height: 24px;
  }
`;

export const Tags = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Tag = styled.li`
  font-size: 14px;
  line-height: 20px;
  padding: 4px 12px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.8);
`;
