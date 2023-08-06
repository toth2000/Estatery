import React from "react";
import {
  Container,
  Wrapper,
  FilterTitle,
  FilterOptions,
  Hr,
  Calender,
} from "./style";
import Button from "../Buttons/Button";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

const Filter = ({
  name,
  isCalender,
  isLast,
  title,
  placeholder,
  menuOptions,
  handleOnChange,
  date,
}) => {
  return (
    <Container>
      {isLast === true ? (
        <Button text={"Search"} type={"PRIMARY"} onClick={handleOnChange} />
      ) : (
        <>
          <Wrapper>
            <FilterTitle>{title}</FilterTitle>
            {isCalender === true ? (
              <div>
                <Calender
                  minDate={new Date()}
                  value={date}
                  onChange={(value) =>
                    handleOnChange({ target: { name: name, value: value } })
                  }
                />
              </div>
            ) : (
              <FilterOptions name={name} onChange={(e) => handleOnChange(e)}>
                <option disabled selected>
                  {placeholder}
                </option>
                {menuOptions.map((data, indx) => (
                  <option key={indx} value={data.valueIndex}>
                    {data.displayText}
                  </option>
                ))}
              </FilterOptions>
            )}
          </Wrapper>
          <Hr />
        </>
      )}
    </Container>
  );
};

export default Filter;
