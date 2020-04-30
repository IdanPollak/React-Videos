import React from "react";
import { Container, DayWrapper, StatusWrapper, TempWrapper } from "./style";
import PropTypes from "prop-types";

const WeatherCard = (props) => {
  return (
    <Container>
      <DayWrapper>
        <div>{props.day}</div>
      </DayWrapper>
      <StatusWrapper>
        <img widht={50} height={50} src={props.status} alt='test'/>
      </StatusWrapper>
      <TempWrapper>
        <div>{props.temprature.day}°</div>
        <div>{props.temprature.night}°</div>
      </TempWrapper>
    </Container>
  );
};

WeatherCard.propTypes = {
  day: PropTypes.string,
  status: PropTypes.string,
  temprature: PropTypes.object,
};

export default WeatherCard;
