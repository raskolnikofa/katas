const doors = require('./100doors.js')

describe("Doors", () => {
    it("should have length of 100", () => {
        expect(doors).toHaveLength(100);
    });
});
