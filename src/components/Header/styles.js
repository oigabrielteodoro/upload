import styled from 'styled-components';

export const Container = styled.header`
  background: #5636D3;
  color: #fff;

  height: 216px;
  position: relative;

  padding-top: 32px;
  margin-bottom: 100px;
`;

export const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  > h1 {
    font-size: 25px;
  }
`;

export const StatisticList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;

  width: 100%;
  margin-top: 100px;
`;

export const StatisticListItem = styled.li`
  background: #fff;
  border-radius: 5px;

  padding: 25px 32px; 
  flex: 1;

  transition: all 0.2s;

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      color: #969CB2;
      font-weight: 500;
    }
  }

  h1 {
    color: #363F5F;
    font-weight: 500;
    font-size: 22px;
  }

  &:hover {
    transform: translateY(-8px);
  }
`;