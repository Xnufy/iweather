import { api } from "./api"
import { getCityByNameService } from "./getCityByNameService"
import { mockCityAPIResponse } from "@__tests__/mocks/api/mockCityAPIResponse";

describe("API: getCityByNameService", () => {
  it("should be return city details",() => {

    jest.spyOn(api, "get").mockResolvedValue({ mockCityAPIResponse });
    const response = getCityByNameService("Campinas");
    
    expect(response).toBeGreaterThan(0);
  })
})