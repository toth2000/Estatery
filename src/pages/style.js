import styled from "styled-components";
import {
  BACKGROUND_PRIMARY_COLOR,
  PRIMARY_COLOR,
  TEXT_SECONDARY_COLOR,
} from "../theme";

export const Container = styled.div`
  padding: 2% 10%;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleText = styled.h1``;

export const Input = styled.input`
  display: flex;
  width: 25%;
  height: 30px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border: 1px solid ${TEXT_SECONDARY_COLOR};
  border-radius: 5px;
  background: ${BACKGROUND_PRIMARY_COLOR};

  &:focus {
    outline: none;
    border: 2px solid ${PRIMARY_COLOR};
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  padding: 15px 25px;
  justify-content: center;
  gap: 15px;
  background-color: ${BACKGROUND_PRIMARY_COLOR};
  border-radius: 5px;
  border: 1px solid ${TEXT_SECONDARY_COLOR};
`;

export const PropertyContainer = styled.div`
  display: flex;
  padding: 10px;
  flex-wrap: wrap;
  margin-top: 25px;
  justify-content: center;
  gap: 25px;
`;
