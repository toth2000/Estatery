import React from "react";
import {
  AddressText,
  Container,
  DetailsContainer,
  Hr,
  Image,
  PropertyNameText,
  RateText,
  Wrapper,
} from "./style";

import TextAndLeftIcon from "../TextAndLeftIcon/index";
import { TEXT_SECONDARY_COLOR } from "../../theme";

import BED_ICON from "../../images/bed.png";
import BATHROOM_ICON from "../../images/bathroom.png";
import AREA_ICON from "../../images/area.png";

const PropertyCard = ({ data }) => {
  const { name, address, image, bedroomCount, bathroomCount, area, price } =
    data;
  return (
    <Container>
      <Image src={image} />
      <Wrapper>
        <RateText>{`₹${price}/month`}</RateText>
        <PropertyNameText>{name}</PropertyNameText>
        <AddressText>{`${address.street}, ${address.city}, ${address.state}, ${address.pincode}`}</AddressText>
        <Hr />

        <DetailsContainer>
          <TextAndLeftIcon
            text={`${bedroomCount} Beds`}
            icon={BED_ICON}
            fontSize={"14px"}
            fontColor={TEXT_SECONDARY_COLOR}
            iconSize={"24px"}
            gap={"5px"}
          />
          <TextAndLeftIcon
            text={`${bathroomCount} Bathrooms`}
            icon={BATHROOM_ICON}
            fontSize={"14px"}
            fontColor={TEXT_SECONDARY_COLOR}
            iconSize={"24px"}
            gap={"5px"}
          />
          <TextAndLeftIcon
            text={`${area} Sq ft`}
            icon={AREA_ICON}
            fontSize={"14px"}
            fontColor={TEXT_SECONDARY_COLOR}
            iconSize={"24px"}
            gap={"5px"}
          />
        </DetailsContainer>
      </Wrapper>
    </Container>
  );
};

export default PropertyCard;
