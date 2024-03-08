import { render,screen, fireEvent} from "@testing-library/react-native"
import { SelectList } from "@components/SelectList"

describe("Component: SelectList", () => {
  it("should be return city details selected",() => {

    const data = [
      {
        id: '1',
        name: 'Campinas',
        latitude: -22.90556,
        longitude: -47.06083
      },
      {
        id: '2',
        name: 'São Paulo',
        latitude: -23.5475,
        longitude: -46.63611
      }
    ]

    const onPress = jest.fn();

    render(
      <SelectList
        data={data}
        onChange={() => {}}
        onPress={onPress}
      />
    )

    const selectedCity = screen.getByText(/Campinas/)
    fireEvent.press(selectedCity)

    expect(onPress).toBeCalledWith(data[0])
  })

  it("not should be show options when data props is empty", () => {
    render(
      <SelectList
        data={[]}
        onChange={() => {}}
        onPress={() => {}}
      />
    )

    const options = screen.getByTestId("options");
    expect(options.children).toHaveLength(0);
  })
});