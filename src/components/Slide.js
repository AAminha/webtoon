import React from 'react';
import styled from 'styled-components';

export default function Slide({ img }) {
  return <IMG src={img} />;
}
const IMG = styled.img`
  width: 80vh;
  height: 70vh;
  width: 500px;
  height: 250px;
`;