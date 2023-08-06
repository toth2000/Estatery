import styled from "styled-components";
// import Image from "next/image";
import { deviceWidth } from "../../constants/deviceWidth";
import { BACKGROUND_PRIMARY_COLOR, TEXT_SECONDARY_COLOR } from "../../theme";

/**
 *   
  @media ${deviceWidth.tablet} {
    flex-direction: row;
    padding: 0 20px;
  }

  @media ${deviceWidth.laptop} {
    padding-right: 45px;
    padding: 0;
  }

 */
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${BACKGROUND_PRIMARY_COLOR};
  padding: 5px 20px;
  box-shadow: 0 1px 0 0 ${TEXT_SECONDARY_COLOR};
`;

export const WrapperLeft = styled.div``;

export const WrapperMiddle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;
export const WrapperRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
