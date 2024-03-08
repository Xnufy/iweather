import { CityAPIResponse } from "@services/getCityByNameService"

export const mockCityAPIResponse: CityAPIResponse = {
  id: '1',
  name: 'Campinas',
  sys: {
    country: 'BR',
  },
  coord: {
    lat: 123,
    lon: 123
  }
};