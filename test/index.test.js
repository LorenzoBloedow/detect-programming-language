import getProgrammingLanguage from "../dist/index";

it("Returns 'JavaScript'.", () => {
    expect(getProgrammingLanguage(".js")).toBe("JavaScript");
});

it("Returns 'JavaScript'.", () => {
    expect(getProgrammingLanguage("testfile.js")).toBe("JavaScript");
});

it("Returns JavaScript+ERB", () => {
    expect(getProgrammingLanguage(".js.erb")).toBe("JavaScript+ERB");
});

it("Returns JavaScript+ERB", () => {
    expect(getProgrammingLanguage("thisisatestfile.js.erb")).toBe("JavaScript+ERB");
});

it("Returns undefined.", () => {
    expect(getProgrammingLanguage(".fkldsjljfk")).toBeUndefined();
});