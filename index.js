const MissionCommander = require('./app/missionCommander');

const luis = new MissionCommander("Luis")
const manuel = new MissionCommander("Manuel")
const vicky = new MissionCommander("Vicky")

console.log(luis.name)
console.log(manuel.name)
console.log(vicky.name)