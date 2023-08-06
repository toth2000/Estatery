import React, { useEffect, useState } from "react";
import {
  Container,
  HeaderContainer,
  TitleText,
  Input,
  FilterContainer,
  PropertyContainer,
} from "./style";
import Filter from "../components/Filter";
import { filterData } from "../data/filterData";
import PropertyCard from "../components/PropertyCard";
import { propertyData } from "../data/propertyData";
import { convertDateToYYYMMDD } from "../utils/date";

const DashBoard = () => {
  // Filter States
  const [filterOptions, setFilterOptions] = useState({
    location: [],
    price: [],
    propertyType: [],
  });

  //   Property Data to Display
  const [propertyList, setPropertyList] = useState(propertyData);

  //   Filters Selected By the User
  const [selectedFilter, setSelectedFilter] = useState({
    location: {
      city: "",
      state: "",
    },
    price: {
      low: "",
      high: "",
    },
    propertyType: "",
  });

  //   States to Handle Input
  const [searchPropertyName, setSearchPropertyName] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  //   Methods to Handle Input Change
  const handleFilterChange = (event) => {
    if (event.target.name === "propertyName") {
      setSearchPropertyName(event.target.value);
      return;
    }

    if (event.target.name === "date") {
      setSelectedDate(event.target.value);
      return;
    }

    const param = selectedFilter;
    const selectedIndex = parseInt(event.target.value);
    param[event.target.name] =
      filterData[event.target.name].data[selectedIndex];
    setSelectedFilter(param);
  };

  //   Handle Search
  const handleSearch = () => {
    const data = propertyData.filter((element) => {
      let isValid = true;
      if (selectedFilter.location.city && selectedFilter.location.state) {
        if (
          element.address.city === selectedFilter.location.city &&
          element.address.state === selectedFilter.location.state
        )
          isValid = true;
        else return false;
      }
      if (selectedFilter.propertyType) {
        if (element.type === selectedFilter.propertyType) isValid = true;
        else return false;
      }

      if (selectedFilter.price.low && selectedFilter.price.high) {
        if (
          selectedFilter.price.low <= element.price &&
          element.price <= selectedFilter.price.high
        )
          isValid = true;
        else return false;
      }

      if (selectedDate) {
        const selectedDateString = convertDateToYYYMMDD(selectedDate);
        const booked = element.bookedDates.includes(selectedDateString);

        console.log("Selected Date: ", selectedDateString);

        if (booked) return false;
        else return true;
      }
      return isValid;
    });

    setPropertyList(data);
    console.log(selectedFilter);
    console.log(selectedDate);
  };

  //   Prepare List of Options and Set Property List
  useEffect(() => {
    const location = [];
    const price = [];
    const type = [];

    filterData["location"].data.forEach((data, indx) => {
      const option = {
        displayText: `${data.city}, ${data.state}`,
        valueIndex: indx,
      };
      location.push(option);
    });
    filterData["price"].data.forEach((data, indx) => {
      const option = {
        displayText: `${data.low} - ${data.high}`,
        valueIndex: indx,
      };
      price.push(option);
    });
    filterData["propertyType"].data.forEach((data, indx) => {
      const option = { displayText: data, valueIndex: indx };
      type.push(option);
    });

    setFilterOptions({
      location: location,
      price: price,
      propertyType: type,
    });
  }, []);

  //   Reset Date Filter on Click clear
  useEffect(() => {
    if (!selectedDate) setPropertyList(propertyData);
  }, [selectedDate]);

  //   Handle Search By Name
  useEffect(() => {
    if (!searchPropertyName) {
      setPropertyList(propertyData);
      return;
    }

    const data = propertyData.filter((element) =>
      element.name.toLowerCase().includes(searchPropertyName.toLowerCase())
    );
    setPropertyList(data);
  }, [searchPropertyName]);

  return (
    <Container>
      <HeaderContainer>
        <TitleText>Search properties to rent</TitleText>
        <Input
          name="propertyName"
          placeholder="Search Property By Name"
          value={searchPropertyName}
          onChange={(e) => handleFilterChange(e)}
        />
      </HeaderContainer>

      <FilterContainer>
        <Filter
          name="location"
          title={filterData["location"].title}
          placeholder={filterData["location"].placeholder}
          menuOptions={filterOptions.location}
          handleOnChange={handleFilterChange}
        />
        <Filter
          name="price"
          title={filterData["price"].title}
          placeholder={filterData["price"].placeholder}
          menuOptions={filterOptions.price}
          handleOnChange={handleFilterChange}
        />
        <Filter
          name="date"
          title={"Move in Date"}
          date={selectedDate}
          isCalender={true}
          menuOptions={[]}
          handleOnChange={handleFilterChange}
        />
        <Filter
          name="propertyType"
          title={filterData["propertyType"].title}
          placeholder={filterData["propertyType"].placeholder}
          menuOptions={filterOptions.propertyType}
          handleOnChange={handleFilterChange}
        />
        <Filter
          name="search"
          isLast={true}
          menuOptions={[]}
          handleOnChange={handleSearch}
        />
      </FilterContainer>

      <PropertyContainer>
        {propertyList.map((data) => (
          <PropertyCard key={data.id} data={data} />
        ))}
      </PropertyContainer>
    </Container>
  );
};

export default DashBoard;
