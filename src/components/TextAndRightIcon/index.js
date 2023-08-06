import React from "react";
import { Container, Icon, Title } from "./style";

const TextAndRightIcon = ({
  text,
  icon,
  fontSize,
  fontColor,
  iconSize,
  gap,
  onClick,
}) => {
  return (
    <Container gap={gap} onClick={onClick ? onClick : null} cursor={onClick}>
      <Title fontSize={fontSize} fontColor={fontColor}>
        {text}
      </Title>
      <Icon src={icon} height={iconSize} width={iconSize} />
    </Container>
  );
};

export default TextAndRightIcon;
