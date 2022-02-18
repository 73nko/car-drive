import { memo, useCallback, useEffect, useMemo, useState } from "react";
import {
  carIsOnTrack,
  direction,
  generateMovements,
  generateObstacles,
  hasRock,
  initializeCarPosition,
  point,
  GRID_SIZE,
} from "../../utils/utils";
import { Car } from "../car";
import { Rock } from "../rock";
import "./track.css";

interface TrackProps {
  carStartPlace?: point;
}

const useTrack = (carStartPlace = { x: 0, y: 0 }) => {
  const obstacles = useMemo(generateObstacles, []);
  const [carPosition, setCarPosition] = useState<point>(
    initializeCarPosition(carStartPlace, obstacles)
  );

  const movements = useMemo(generateMovements, []);

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

  const isCarPosition = useCallback(
    (gridPosition: point) => {
      return (
        gridPosition.x === carPosition.x && gridPosition.y === carPosition.y
      );
    },
    [carPosition]
  );

  const moveCar = useCallback((direction: direction) => {
    setCarPosition((carPosition: point) => {
      const newCarPosition = { x: carPosition.x, y: carPosition.y };
      switch (direction) {
        case "up":
          newCarPosition.y = newCarPosition.y - 1;
          break;
        case "down":
          newCarPosition.y = newCarPosition.y + 1;
          break;
        case "left":
          newCarPosition.x = newCarPosition.x - 1;
          break;
        case "right":
          newCarPosition.x = newCarPosition.x + 1;
          break;
        default:
          break;
      }
      return hasRock(obstacles, newCarPosition)
        ? { ...newCarPosition, x: newCarPosition.x + 1 }
        : newCarPosition;
    });
  }, []);

  return {
    carPosition,
    moveCar,
    obstacles,
    isCarPosition,
  };
};

const Track = memo(({ carStartPlace }: TrackProps) => {
  const { obstacles, isCarPosition } = useTrack(carStartPlace);
  const elems = useMemo(() => [...Array(GRID_SIZE)].map((_, i) => i), []);

  return (
    <div className="track-grid">
      {[
        elems.map((x) => (
          <TrackRow
            key={x}
            x={x}
            elems={elems}
            isCarPosition={isCarPosition}
            obstacles={obstacles}
          />
        )),
      ]}
    </div>
  );
});

interface TrackRowProps {
  x: number;
  elems: number[];
  obstacles: point[];
  isCarPosition: (point: point) => boolean;
}

const TrackRow = memo((props: TrackRowProps) => (
  <div className="track-row">
    {props.elems.map((y: number) => (
      <TrackCell key={y} y={y} {...props} />
    ))}
  </div>
));

interface TrackCellProps {
  y: number;
  x: number;
  elems: number[];
  obstacles: point[];
  isCarPosition: (point: point) => boolean;
}

const TrackCell = memo(({ x, y, obstacles, isCarPosition }: TrackCellProps) => (
  <div key={y} className="track-cell">
    {hasRock(obstacles, { x, y }) ? <Rock /> : null}
    {isCarPosition({ x, y }) ? <Car color="red" /> : null}
  </div>
));

export { Track };
