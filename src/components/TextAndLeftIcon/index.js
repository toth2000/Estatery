import React from "react";
import { Container, Icon, Title } from "./style";

const TextAndLeftIcon = ({
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
      <Icon src={icon} height={iconSize} width={iconSize} />
      <Title fontSize={fontSize} fontColor={fontColor}>
        {text}
      </Title>
    </Container>
  );
};

export default TextAndLeftIcon;
