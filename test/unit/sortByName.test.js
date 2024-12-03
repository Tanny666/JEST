const sorting = require("../../Jest/app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });

  it("Should keep the same order for identical names", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Гарри Поттер",
      ])
    ).toEqual([
      "Гарри Поттер",
      "Гарри Поттер",
    ]);
  });

  it("Should sort names with mixed case correctly", () => {
    expect(
      sorting.sortByName([
        "глубокий",
        "Зеленый",
        "синий",
        "Красный",
        "Синий",
      ])
    ).toEqual([
      "Зеленый",
      "Красный",
      "глубокий",
      "Синий",
      "синий"
    ]);
  });

  it("Should return an empty array when input is an empty array", () => {
    expect(sorting.sortByName([])).toEqual([]);
  });

  it("Should return the same single-element array", () => {
    expect(sorting.sortByName(["Один элемент"])).toEqual(["Один элемент"]);
  });

  it("Should handle an array with one name", () => {
    expect(sorting.sortByName(["Единственное имя"])).toEqual(["Единственное имя"]);
  });

  it("Should handle array elements with different types", () => {
    expect(() => sorting.sortByName([123, null, {}, "Text"])).toThrow();
  });
});