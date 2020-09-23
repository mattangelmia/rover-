



var myRover = {
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: []

}



function turnLeft() {
  switch (myRover.direction) {
    case 'N':
      myRover.direction = 'W';
      break;
    case 'W':
      myRover.direction = 'S';
      break;
    case 'S':
      myRover.direction = 'E';
      break;
    case 'E':
      myRover.direction = 'N';
      break;
  }

  console.log(`turnLeft was called! The rover is currently pointing ${myRover.direction}`);
  myRover.travelLog.push([myRover.x, myRover.y])
}


function turnRight() {
  switch (myRover.direction) {
    case 'N':
      myRover.direction = 'E';
      break;
    case 'W':
      myRover.direction = 'N';
      break;
    case 'S':
      myRover.direction = 'W';
      break;
    case 'E':
      myRover.direction = 'S';
      break;
  }

  console.log(`turnRight has been called! The rover's currently pointing ${myRover.direction}`);
  myRover.travelLog.push([myRover.x, myRover.y])
}


function moveBackward() {
  switch (myRover.direction) {
    case 'N':
      myRover.y++;
      break;

    case 'W':
      myRover.x++;
      break;

    case 'S':
      myRover.y--
      break;

    case 'E':
      myRover.x--;
      break;
  }

  offGrid('backward')
  console.log(`The rover has moved backward, its current position is x=${myRover.x}, y=${myRover.y}`)
  myRover.travelLog.push([myRover.x, myRover.y])

}


function moveForward() {
  switch (myRover.direction) {
    case 'N':
      myRover.y--;
      break;

    case 'W':
      myRover.x--;
      break;

    case 'S':

      myRover.y++;
      break;

    case 'E':

      myRover.x++;
      break;

  }

  offGrid('forward')
  console.log(`The rover has moved forward, its current position is x=${myRover.x}, y=${myRover.y}`)
  myRover.travelLog.push([myRover.x, myRover.y])

}


var commandList = ['r', 'f', 'r', 'l', 'f', 'f', 'l', 'f', 'r', 'f', 'f']

function commands(command) {
  for (var i = 0; i < command.length; i++) {
    switch (command[i]) {


      case 'f':
        moveForward();

        break;

      case 'r':
        turnRight();

        break;

      case 'l':
        turnLeft();

        break;

      case 'b':
        moveBackward();

        break;
    }

    validInput(command[i]);
  }

}
function offGrid() {
  if (myRover.x < 0 || myRover.x > 9) {
    console.log('YOU HAVE GONE OFF THE GRID!!!');
    myRover.x = 0
  }
  if (myRover.y < 0 || myRover.y > 9) {
    console.log('YOU HAVE GONE OFF THE GRID!!!');
    myRover.y = 0
  }
}

function validInput(commands) {
  if (commands === 'l' || commands === 'r' || commands === 'f' || commands === 'b') {
    console.log('THIS INPUT IS VALID');
  }
  else {
    console.log('THIS INPUT IS INVALID, TRY AGAIN');
  }
}

commands('rlrffffrffflbbb')
