import styled from "styled-components";
import {
  BACKGROUND_PRIMARY_COLOR,
  ButtonBackgroundPrimary,
  TEXT_PRIMARY_COLOR,
  TEXT_SECONDARY_COLOR,
} from "../../theme";

export const Container = styled.div`
  border-radius: 5px;
  width: 30%;
  background-color: ${BACKGROUND_PRIMARY_COLOR};
  box-shadow: 1px 1px 1px 1px ${TEXT_SECONDARY_COLOR};
`;

export const Image = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
`;

export const Wrapper = styled.div`
  margin-top: 25px;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const RateText = styled.h1`
  color: ${ButtonBackgroundPrimary};
  font-size: 18px;
  margin: 0;
`;

export const PropertyNameText = styled.h1`
  color: ${TEXT_PRIMARY_COLOR};
  font-size: 24px;
  margin: 0;
`;

export const AddressText = styled.p`
  color: ${TEXT_PRIMARY_COLOR};
  font-size: 12px;
  margin: 0;
`;

export const Hr = styled.hr`
  width: 90%;
  height: 0.1px;
  border-bottom: 1px solid #ccc;
`;

export const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

