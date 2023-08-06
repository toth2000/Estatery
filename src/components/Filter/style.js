import styled from "styled-components";
import { TEXT_SECONDARY_COLOR } from "../../theme";
import DatePicker from "react-date-picker";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FilterTitle = styled.p`
  font-size: 14px;
  margin: 0;
  color: ${TEXT_SECONDARY_COLOR};
  font-weight: 600;
`;

export const FilterOptions = styled.select`
  height: 35px;
`;

export const Hr = styled.hr`
  width: 0.1px;
  height: 70%;
  border-bottom: 1px solid #ccc;
`;

export const CalenderContainer = styled.div``;

export const Calender = styled(DatePicker)`
  height: 35px;
`;
