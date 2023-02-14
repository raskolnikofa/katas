const openDoor = '@';
const closedDoor = '#';
const holdingDoor = 'H';
const doorsAmount = 100;

let doors = [];

// using for loop - dirty version
// for (let pass = 1; pass <= 3; pass ++){
//     console.log(pass);
//     if (pass === 1) {
//         for (let door = 1; door <= doorsAmount; door++) {
//             doors.push(openDoor);
//         }
//         console.log('All doors are open now...');
//         console.log(doors.join(''));
//     } else if (pass === 2) {
//         for (let door = 1; door <= doorsAmount; door++) {
//             if (door % 2 === 0) doors[door-1] = closedDoor;
//         }
//         console.log('Every other door is closed now...');
//         console.log(doors.join(''));
//     } else if (pass === 3) {
//         for (let door = 1; door <= doorsAmount; door++) {
//             if (door % 3 === 0) {
//                 if (doors[door-1] === openDoor) doors[door-1] = closedDoor;
//                 if (doors[door-1] === closedDoor) doors[door-1] = openDoor;
//             }
//         }
//         console.log('Every third door is toggled now...');
//         console.log(doors.join(''));
//     }
// }

// version for jest testing
const firstIteration = (doors) => {
        for (let door = 1; door <= doorsAmount; door++) {
            doors.push(openDoor);
        }
        console.log(`All doors are open now... ${doors.join('')}`);
        return doors.join('');
};

const secondIteration = (doors) => {
    for (let door = 1; door <= doorsAmount; door++) {
        if (door % 2 === 0) doors[door-1] = closedDoor;
    }
    console.log(`Every other door is closed now... ${doors.join('')}`);
    return doors.join('');
};

const thirdIteration = (doors) => {
    for (let door = 1; door <= doorsAmount; door++) {
        if (door % 3 === 0) {
            if (doors[door-1] === openDoor) {
                doors[door - 1] = holdingDoor
            }
            else if (doors[door-1] === holdingDoor) {
                doors[door - 1] = closedDoor
            }
            else if (doors[door-1] === closedDoor) {
                doors[door - 1] = openDoor
            }
        }
    }
    console.log(`Every third door is toggled now... ${doors.join('')}`);
    return doors.join('');
};

firstIteration(doors);
secondIteration(doors);
thirdIteration(doors);

module.exports = {
    doorsAmount,
    firstIteration,
    secondIteration,
    thirdIteration
};
