import React from "react";

import { Container, Title } from "./style";
import TextAndRightIcon from "../../TextAndRightIcon/index";
import { TEXT_PRIMARY_COLOR } from "../../../theme";

const NavItem = ({ text, icon }) => {
  return (
    <Container>
      {icon ? (
        <TextAndRightIcon
          text={text}
          icon={icon}
          fontSize={"16px"}
          fontColor={TEXT_PRIMARY_COLOR}
          iconSize={"22px"}
          gap={"8px"}
        />
      ) : (
        <Title>{text}</Title>
      )}
    </Container>
  );
};

export default NavItem;
