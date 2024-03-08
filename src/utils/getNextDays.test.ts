import { getNextDays } from "./getNextDays";

it("should return the next 5 days", () => {
  const days = getNextDays();
  console.log(days)

  expect(days.length).toBe(5);
})