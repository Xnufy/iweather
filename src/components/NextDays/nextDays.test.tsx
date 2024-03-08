import { render, screen } from "@testing-library/react-native";
import { NextDays } from "@components/NextDays";
import clearDay from "@assets/clear_day.svg";

describe("Component: NextDays", () => {
  it("should be render day.", () => {
    render(
      <NextDays
        data={[
          {day: '18/07', min: '30ºc', max: '35ºc', icon: clearDay, weather: 'Céu limpo'},
          {day: '19/07', min: '20ºc', max: '24ºc', icon: clearDay, weather: 'Nublado'},
          {day: '20/07', min: '25ºc', max: '27ºc', icon: clearDay, weather: 'Céu limpo'},
          {day: '21/07', min: '27ºc', max: '30ºc', icon: clearDay, weather: 'Céu limpo'},
          {day: '22/07', min: '28ºc', max: '33ºc', icon: clearDay, weather: 'Chuva Fraca'},
        ]}
      />
    )

    expect(screen.getByText('18/07')).toBeTruthy();
  });

});