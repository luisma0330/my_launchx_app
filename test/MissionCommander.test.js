describe("Unit Tests for Mission Commander Class", () => {
    test("1) Create a mission commander object", () => {
        const MissionCommander = require('./../app/missionCommander');
        const myMissionCommander = new MissionCommander("Woopa")
        expect(myMissionCommander.name).toBe("Woops");
    })
})