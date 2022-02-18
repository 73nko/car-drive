import { useEffect, KeyboardEvent } from "react";

export function useKeyPress(
  keys: string[],
  fireAction: (key: any) => void
): void {
  function downHandler({ key }: KeyboardEvent<HTMLInputElement>): void {
    const direction = key.replace("Arrow", "").toLowerCase();
    if (keys.includes(direction)) {
      fireAction(direction);
    }
  }
  useEffect(() => {
    window.addEventListener("keydown", downHandler as unknown as EventListener);
    return () => {
      window.removeEventListener(
        "keydown",
        downHandler as unknown as EventListener
      );
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
}
