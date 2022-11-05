import getProgrammingLanguage from "../dist/index";

it("Returns 'JavaScript'.", () => {
    expect(getProgrammingLanguage(".js")).toBe("JavaScript");
})

it("Returns undefined.", () => {
    expect(getProgrammingLanguage(".fkldsjljfk")).toBeUndefined();
})