import styled from "styled-components";

export const Title = styled.h1`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.fontColor};
`;

export const Container = styled.button`
  text-decoration: none;
  border: none;
  width: ${(props) => (props.width ? props.width : "auto")};
  padding: ${(props) => props.padding};
  border-radius: 10px;
  border: ${(props) => props.border};
  cursor: pointer;
  background: ${(props) => props.backgroundColor};

  &:hover {
    background: ${(props) => props.hoverBackgroundColor};
    border: ${(props) => props.hoverBorder};
  }

  &:hover ${Title} {
    color: ${(props) => props.fontHoverColor};
  }
`;
