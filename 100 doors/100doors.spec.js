const {
    doorsAmount,
    firstIteration,
    secondIteration,
    thirdIteration
} = require('./100doors.js')

let doors = [];

const expectedResultFromTheFirstIteration = "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@";
const expectedResultFromTheSecondIteration = "@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#";
const expectedResultFromTheThirdIteration = "@#H#@@@#H#@@@#H#@@@#H#@@@#H#@@@#H#@@@#H#@@@#H#@@@#H#@@@#H#@@@#H#@@@#H#@@@#H#@@@#H#@@@#H#@@@#H#@@@#H#";

describe("Doors", () => {
    it("should have amount of 100", () => {
        expect(doorsAmount).toStrictEqual(100);
    });

    it("should have expected result for the first iteration", () => {
        expect(firstIteration(doors)).toStrictEqual(expectedResultFromTheFirstIteration);
    });

    it("should have expected result for the second iteration", () => {
        expect(secondIteration(doors)).toStrictEqual(expectedResultFromTheSecondIteration);
    });

    it("should have expected result for the third iteration", () => {
        expect(thirdIteration(doors)).toStrictEqual(expectedResultFromTheThirdIteration);
    });
});
