export type point = {
  x: number;
  y: number;
};

export type direction = "up" | "down" | "left" | "right";

const MOVEMENTS = 5;
export const GRID_SIZE = 50;

const sleep = (milliseconds = 1000) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

const createRandomDirection = (): direction => {
  const directions: direction[] = ["up", "down", "left", "right"];
  return directions[Math.floor(Math.random() * directions.length)];
};

const createMovements = () => {
  const movements: direction[] = [];
  for (let i = 0; i < MOVEMENTS; i++) {
    movements.push(createRandomDirection());
  }
  return movements;
};

export const generateObstacles = (obstacleNumber = 12): point[] => {
  const obstacles: point[] = [];
  for (let i = 0; i < obstacleNumber; i++) {
    obstacles.push({
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    });
  }
  return obstacles;
};

export const hasRock = (obstacles: point[], gridPosition: point) => {
  return obstacles.some(
    ({ x: obstacleX, y: obstacleY }) =>
      gridPosition.x === obstacleX && gridPosition.y === obstacleY
  );
};

export const initializeCarPosition = (
  carStartPlace: point,
  obstacles: point[]
) => {
  return hasRock(obstacles, carStartPlace)
    ? carStartPlace.x > 1
      ? { x: carStartPlace.x - 2, y: 0 }
      : { x: carStartPlace.x + 2, y: 0 }
    : carStartPlace;
};

export const carIsOnTrack = (carPosition: point) => {
  return (
    carPosition.x >= 0 &&
    carPosition.x <= GRID_SIZE - 1 &&
    carPosition.y >= 0 &&
    carPosition.y <= GRID_SIZE - 1
  );
};

const movesList = createMovements();

export async function* generateMovements() {
  for (let move of movesList) {
    await sleep(1000);
    console.log({ move });
    yield move;
  }
}

export const gridElements = [...Array(GRID_SIZE)].map((_, i) => i);
export const obstacles = generateObstacles();
export const movements = generateMovements();
