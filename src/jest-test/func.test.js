import { timeTwo } from "./func";

//npm testで実行
test("Multiplies by two", () => {
  expect(timeTwo(4)).toBe(8);
});
