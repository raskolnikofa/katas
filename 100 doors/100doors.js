const openDoor = '@';
const closedDoor = '#';
const doorsAmount = 100;

// using for loop

let doors = [];

for (let pass = 1; pass <= 3; pass ++){
    console.log(pass);
    if (pass === 1) {
        for (let door = 1; door <= doorsAmount; door++) {
            doors.push(openDoor);
        }
        console.log('All doors are open now...');
        console.log(doors.join(''));
    } else if (pass === 2) {
        for (let door = 1; door <= doorsAmount; door++) {
            if (door % 2 === 0) doors[door-1] = closedDoor;
        }
        console.log('Every other door is closed now...');
        console.log(doors.join(''));
    } else if (pass === 3) {
        for (let door = 1; door <= doorsAmount; door++) {
            if (door % 3 === 0) {
                if (doors[door-1] === openDoor) doors[door-1] = closedDoor;
                if (doors[door-1] === closedDoor) doors[door-1] = openDoor;
            }
        }
        console.log('Every third door is toggled now...');
        console.log(doors.join(''));
    }
}

module.exports = doors;
