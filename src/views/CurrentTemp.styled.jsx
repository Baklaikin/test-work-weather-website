import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  padding: 8px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: transparent;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

export const WeatherPicture = styled.div`
  width: 140px;
  height: 140px;
  margin-left: auto;
  margin-right: auto;
  background-image: ${(props) => {
    return `url( http://openweathermap.org/img/wn/${props.picture}@2x.png)`;
  }};
  background-position: center;
  background-repeat: no-repeat;
`;

export const Temp = styled.h3`
  font-size: 50px;
  font-weight: 700;
`;

export const Text = styled.p`
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-weight: 500;
`;
