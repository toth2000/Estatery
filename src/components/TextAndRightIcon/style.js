import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.gap};
  cursor: ${(props) => (props.cursor ? "pointer" : null)};
`;

export const Icon = styled.img`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;
export const Title = styled.h1`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.fontColor};
`;
