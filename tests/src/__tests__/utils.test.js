const { addMonthsToDate } = require("../../../src/utils/date-utils");

describe("Utils - addMonthsToDate", () => {
  it("debería sumar correctamente los meses a una fecha", () => {
    const inputDate = new Date("2024-01-15");
    const result = addMonthsToDate(inputDate, 2);
    expect(result.getFullYear()).toBe(2024);
    expect(result.getMonth()).toBe(2); // marzo
    expect(result.getDate()).toBeGreaterThanOrEqual(14); // puede ser 14 o 15
    expect(result.getDate()).toBeLessThanOrEqual(15);
  });

  it("debería cambiar de año si se suman muchos meses", () => {
    const inputDate = new Date("2024-11-10");
    const result = addMonthsToDate(inputDate, 3);
    expect(result.getFullYear()).toBe(2025);
    expect(result.getMonth()).toBe(1); // febrero
    expect(result.getDate()).toBeGreaterThanOrEqual(9); // puede reducir un día por ajuste de mes
    expect(result.getDate()).toBeLessThanOrEqual(10);
  });

  it("debería manejar correctamente fechas con día 31", () => {
    const inputDate = new Date("2024-01-31");
    const result = addMonthsToDate(inputDate, 1);

    // Debería caer en marzo porque febrero no tiene 31
    expect(result.getMonth()).toBe(2); // marzo
    expect(result.getDate()).toBeGreaterThanOrEqual(1);
    expect(result.getDate()).toBeLessThanOrEqual(3); // normalmente cae el 1, 2 o 3
  });
});
