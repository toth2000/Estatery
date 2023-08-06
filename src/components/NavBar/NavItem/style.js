import styled from "styled-components";
import { SECONDARY_COLOR, TEXT_PRIMARY_COLOR } from "../../../theme";

export const Container = styled.button`
  text-decoration: none;
  border: none;
  padding: 5px 20px;
  border-radius: 10px;
  cursor: pointer;
  background: #fff;

  &:hover {
    background: ${SECONDARY_COLOR};
  }
`;

export const Title = styled.h1`
  font-size: 16px;
  color: ${TEXT_PRIMARY_COLOR};
`;
