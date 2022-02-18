import { memo, useCallback, useEffect, useMemo, useState } from "react";
import {
  carIsOnTrack,
  direction,
  movements,
  obstacles,
  hasRock,
  initializeCarPosition,
  point,
  gridElements,
} from "../../utils/utils";
import { useKeyPress } from "../../hooks/useKeyPress";
import { Car } from "../car";
import { Rock } from "../rock";
import "./track.css";

interface TrackProps {
  carStartPlace?: point;
}

const useTrack = (carStartPlace = { x: 0, y: 0 }) => {
  const [carDirection, setCarDirection] = useState<direction>("right");
  const [carPosition, setCarPosition] = useState<point>(
    initializeCarPosition(carStartPlace, obstacles)
  );

  useEffect(() => {
    const initializeMovements = async () => {
      for await (let direction of movements) {
        if (carIsOnTrack(carPosition)) {
          moveCar(direction);
        }
      }
    };
    initializeMovements();
  }, []);

  const moveCar = useCallback((direction: direction) => {
    setCarPosition((carPosition: point) => {
      const newCarPosition = { x: carPosition.x, y: carPosition.y };
      switch (direction) {
        case "up":
          newCarPosition.x =
            newCarPosition.x - 1 < 0
              ? gridElements.length - 1
              : newCarPosition.x - 1;
          break;
        case "down":
          newCarPosition.x =
            newCarPosition.x + 1 > gridElements.length - 1
              ? 0
              : newCarPosition.x + 1;
          break;
        case "left":
          newCarPosition.y =
            newCarPosition.y - 1 < 0 ? 0 : newCarPosition.y - 1;
          break;
        case "right":
          newCarPosition.y =
            newCarPosition.y + 1 > gridElements.length - 1
              ? gridElements.length - 1
              : newCarPosition.y + 1;
          break;
        default:
          break;
      }
      return hasRock(obstacles, newCarPosition)
        ? { ...newCarPosition, x: newCarPosition.x + 1 }
        : newCarPosition;
    });
    setCarDirection(direction);
  }, []);

  const isCarPosition = useCallback(
    (gridPosition: point) => {
      return (
        gridPosition.x === carPosition.x && gridPosition.y === carPosition.y
      );
    },
    [carPosition]
  );

  return {
    carDirection,
    isCarPosition,
    moveCar,
  };
};

const directions = ["up", "down", "left", "right"];

const Track = memo(({ carStartPlace }: TrackProps) => {
  const { isCarPosition, carDirection, moveCar } = useTrack(carStartPlace);
  useKeyPress(directions, moveCar);
  return (
    <div className="track-grid">
      {[
        gridElements.map((x) => (
          <TrackRow
            key={x}
            x={x}
            isCarPosition={isCarPosition}
            carDirection={carDirection}
          />
        )),
      ]}
    </div>
  );
});

interface TrackRowProps {
  x: number;
  carDirection: direction;
  isCarPosition: (point: point) => boolean;
}

const TrackRow = memo((props: TrackRowProps) => (
  <div className="track-row">
    {gridElements.map((y: number) => (
      <TrackCell key={y} y={y} {...props} />
    ))}
  </div>
));

interface TrackCellProps {
  y: number;
  x: number;
  carDirection: direction;
  isCarPosition: (point: point) => boolean;
}

const TrackCell = memo(
  ({ x, y, carDirection, isCarPosition }: TrackCellProps) => (
    <div key={y} className="track-cell">
      {hasRock(obstacles, { x, y }) ? <Rock /> : null}
      {isCarPosition({ x, y }) ? (
        <Car color="red" direction={carDirection} />
      ) : null}
    </div>
  )
);

export { Track };
