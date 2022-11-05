import getProgrammingLanguage from "../src";

test("Returns the language associated with the file extension provided or undefined if not found", () => {

    it("Returns 'JavaScript'.", () => {
        expect(getProgrammingLanguage(".js")).toBe("JavaScript");
    })

    it("Returns undefined.", () => {
        expect(getProgrammingLanguage(".fkldsjljfk")).toBeUndefined();
    })
});