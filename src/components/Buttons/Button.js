import React, { useEffect, useState } from "react";
import { Container, Title } from "./style";
import {
  ButtonBackgroundPrimary,
  ButtonBackgroundSecondary,
  ButtonTextPrimary,
  ButtonTextSecondary,
} from "../../theme";

/**
 * @param buttonSize -> sm, l, xl any one string value
 * @param type -> PRIMARY, SECONDARY any one string value
 * @param text -> any string value
 */

const Button = ({ text, buttonSize, type, onClick }) => {
  const [mounted, setMounted] = useState(false);
  const [values, setValues] = useState({
    fontColor: "",
    backgroundColor: "",
    hoverBackgroundColor: "",
    fontHoverColor: "",
    padding: "",
    fontSize: "",
    border: "",
    hoverBorder: "",
  });

  useEffect(() => {
    let paramValue = values;

    paramValue.fontColor =
      type === "PRIMARY" ? ButtonTextPrimary : ButtonTextSecondary;
    paramValue.backgroundColor =
      type === "PRIMARY" ? ButtonBackgroundPrimary : ButtonBackgroundSecondary;
    paramValue.hoverBackgroundColor =
      type === "PRIMARY" ? ButtonBackgroundSecondary : ButtonBackgroundPrimary;
    paramValue.fontHoverColor =
      type === "PRIMARY" ? ButtonTextSecondary : ButtonTextPrimary;
    paramValue.border = type === "PRIMARY" ? "none" : "1px solid #E5E4E2";
    paramValue.hoverBorder = type === "PRIMARY" ? "1px solid #E5E4E2" : "none";

    switch (buttonSize) {
      case "sm":
        paramValue.fontSize = "14px";
        paramValue.padding = "5px 15px";
        break;

      case "l":
        paramValue.fontSize = "24px";
        paramValue.padding = "5px 25px";
        break;

      case "xl":
        paramValue.fontSize = "36px";
        paramValue.padding = "5px 35px";
        break;

      default:
        paramValue.fontSize = "14px";
        paramValue.padding = "10px 15px";
        paramValue.width = "100%";
        break;
    }

    setValues(paramValue);
    setMounted(true);
  }, [buttonSize, type]);

  return mounted ? (
    <Container
      onClick={onClick}
      padding={values.padding}
      backgroundColor={values.backgroundColor}
      hoverBackgroundColor={values.hoverBackgroundColor}
      fontHoverColor={values.fontHoverColor}
      border={values.border}
      hoverBorder={values.hoverBorder}
      width={values.width}
    >
      <Title fontSize={values.fontSize} fontColor={values.fontColor}>
        {text}
      </Title>
    </Container>
  ) : null;
};

export default Button;
