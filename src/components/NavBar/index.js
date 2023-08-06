import TextAndLeftIcon from "../TextAndLeftIcon";
import { Container, WrapperLeft, WrapperMiddle, WrapperRight } from "./style";

import logo from "../../images/logo.png";
import arrow_down_icon from "../../images/arrow_down.png";
import { PRIMARY_COLOR } from "../../theme";
import NavItem from "./NavItem/NavItem";
import Button from "../Buttons/Button";

const NavBar = () => {
  return (
    <Container>
      <WrapperLeft>
        <TextAndLeftIcon
          text={"Estatery"}
          icon={logo}
          fontSize={"24px"}
          fontColor={PRIMARY_COLOR}
          iconSize={"35px"}
          gap={"18px"}
        />
      </WrapperLeft>
      <WrapperMiddle>
        <NavItem text={"Rent"} />
        <NavItem text={"Buy"} />
        <NavItem text={"Sell"} />
        <NavItem text={"Manage Property"} icon={arrow_down_icon} />
        <NavItem text={"Resources"} icon={arrow_down_icon} />
      </WrapperMiddle>
      <WrapperRight>
        <Button text="Login" buttonSize="sm" type="SECONDARY" />
        <Button text="Sign Up" buttonSize="sm" type="PRIMARY" />
      </WrapperRight>
    </Container>
  );
};

export default NavBar;
