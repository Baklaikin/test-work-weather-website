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
`;

export const WeatherPicture = styled.div`
  width: 100px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 35%;
  background-image: ${(props) => {
    return `url( http://openweathermap.org/img/wn/${props.picture}@2x.png)`;
  }};
`;

export const Temp = styled.span`
  font-size: 20px;
  font-weight: 700;
`;
