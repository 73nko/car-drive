import { direction } from "../../utils/utils";

const DEFAULT_COLOR = "#ca0000";
const DEFAULT_DIRECTION = "left";

interface CarProps {
  direction?: direction;
  color?: string;
}

const positionStyle = {
  up: "rotate(270deg)",
  down: "rotate(90deg)",
  right: "rotate(180deg)",
  left: "rotate(0deg)",
};

export function Car(props: CarProps) {
  const { direction, color } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 960 476"
      style={{
        transition: "transform 0.2s",
        transform: `${positionStyle[direction || DEFAULT_DIRECTION]}`,
      }}>
      <defs>
        <linearGradient>
          <stop offset={0} />
          <stop offset={1} stopColor="#b3b3b3" stopOpacity={0} />
        </linearGradient>
        <linearGradient>
          <stop offset={0} />
          <stop offset={1} stopColor="#ccc" stopOpacity={0} />
        </linearGradient>
        <linearGradient>
          <stop offset={0} stopColor="#333" />
          <stop offset={1} stopColor="gray" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="a">
          <stop offset={0} stopColor="#1a1a1a" />
          <stop offset={1} stopColor="#f30000" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          xlinkHref="#a"
          id="b"
          x1={871.33}
          x2={848.16}
          y1={842.3}
          y2={834.68}
          gradientTransform="translate(8.3 -2.65)"
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#a"
          id="h"
          x1={879.9}
          x2={812.14}
          y1={537.5}
          y2={533.5}
          gradientTransform="translate(80.35 365.15) scale(.89332)"
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#a"
          id="d"
          x1={879.9}
          x2={815.82}
          y1={537.5}
          y2={531.91}
          gradientTransform="translate(27.62 296.5)"
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#a"
          id="k"
          x1={871.33}
          x2={848.16}
          y1={842.3}
          y2={834.68}
          gradientTransform="matrix(1 0 0 -1 8.3 1452.04)"
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#a"
          id="l"
          x1={887.9}
          x2={876.14}
          y1={528.36}
          y2={528.42}
          gradientTransform="matrix(1 0 0 -1 21.44 1151.48)"
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#a"
          id="m"
          x1={879.9}
          x2={815.82}
          y1={537.5}
          y2={531.91}
          gradientTransform="matrix(1 0 0 -1 27.62 1152.9)"
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#a"
          id="n"
          x1={897.22}
          x2={883.76}
          y1={542.4}
          y2={535.37}
          gradientTransform="matrix(1 0 0 -1 21.44 1151.48)"
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#a"
          id="o"
          x1={880.71}
          x2={835.99}
          y1={552.05}
          y2={501.08}
          gradientTransform="matrix(1 0 0 -1 21.44 1151.48)"
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#a"
          id="p"
          x1={887.9}
          x2={805.29}
          y1={528.36}
          y2={529.61}
          gradientTransform="matrix(.89332 0 0 -.89332 94.16 1087.81)"
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#a"
          id="q"
          x1={879.9}
          x2={812.14}
          y1={537.5}
          y2={533.5}
          gradientTransform="matrix(.89332 0 0 -.89332 80.35 1084.24)"
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#a"
          id="r"
          x1={229.7}
          x2={205.59}
          y1={873.14}
          y2={867.68}
          gradientTransform="scale(1 -1) rotate(7.93 10770.97 311.71)"
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#a"
          id="s"
          x1={238.83}
          x2={216.56}
          y1={873.06}
          y2={872.65}
          gradientTransform="scale(1 -1) rotate(7.93 10766.86 386.37)"
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#a"
          id="c"
          x1={887.9}
          x2={876.14}
          y1={528.36}
          y2={528.42}
          gradientTransform="translate(21.44 297.9)"
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#a"
          id="e"
          x1={897.22}
          x2={883.76}
          y1={542.4}
          y2={535.37}
          gradientTransform="translate(21.44 297.9)"
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#a"
          id="f"
          x1={880.71}
          x2={835.99}
          y1={552.05}
          y2={501.08}
          gradientTransform="translate(21.44 297.9)"
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#a"
          id="g"
          x1={887.9}
          x2={805.29}
          y1={528.36}
          y2={529.61}
          gradientTransform="translate(94.16 361.57) scale(.89332)"
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#a"
          id="i"
          x1={229.7}
          x2={205.59}
          y1={873.14}
          y2={867.68}
          gradientTransform="rotate(7.93 317.41 1036.4)"
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#a"
          id="j"
          x1={238.83}
          x2={216.56}
          y1={873.06}
          y2={872.65}
          gradientTransform="rotate(7.93 313.3 1111.06)"
          gradientUnits="userSpaceOnUse"
        />
      </defs>
      <path
        stroke="#191919"
        strokeWidth={14}
        d="M557.59 7c-1.51 0-4.72.3-6.47.94l-3.5 1.5 8.66 35.94-124.82.28-7.34-.03c-4.91-.04-9.86-.1-14.84-.22-7.3-.17-14.67-.42-22.07-.72l-1.18-.06c-14.94-.64-30.01-1.5-45.03-2.44-20.33-1.29-40.52-2.71-60.13-3.88-14.53-.86-28.73-1.58-42.37-2a749.4 749.4 0 00-27.25-.4c-4.32.02-8.57.09-12.72.22a370.65 370.65 0 00-19.1 1.16c-6.46.56-13.04 1.31-19.59 2.18h-.03a638.69 638.69 0 00-38.6 6.44h-.02a763.05 763.05 0 00-23.6 5h-.03a892.72 892.72 0 00-29.25 7.15 738.2 738.2 0 00-18.1 5c-2.47.72-3.8 1.13-3.8 1.13l-13.7 3.75c-.9.25-1.77.7-2.62 1.31-.28.21-.56.44-.84.69-1.1.98-2.15 2.27-3.16 3.84v.03c-.5.79-1.02 1.64-1.5 2.57v.03a47.1 47.1 0 00-1.4 2.97v.03c-3.67 8.5-6.62 21.13-8.94 36.22v.03l-.1.71c-.5 3.34-.99 6.8-1.43 10.35l-.1.72c-.5 4.04-.94 8.2-1.37 12.47v.03c-.21 2.13-.43 4.3-.62 6.47v.03c-.2 2.17-.39 4.35-.57 6.56v.03a810.4 810.4 0 00-.97 13.5v.03c-.87 13.69-1.46 27.8-1.78 41.56v.04c-.21 9.19-.31 18.2-.31 26.9l.03 2.94-.03 2.94c0 8.7.1 17.71.31 26.9v.03c.32 13.78.91 27.88 1.78 41.57v.03c.3 4.55.61 9.06.97 13.5v.03l.56 6.56v.03c.2 2.18.42 4.34.63 6.47v.03c.43 4.27.87 8.43 1.37 12.47l.1.72c.44 3.55.93 7.01 1.44 10.34.03.24.05.49.09.72v.03c2.32 15.1 5.27 27.71 8.94 36.22v.03a47.1 47.1 0 001.4 2.97v.03c.48.93 1 1.78 1.5 2.57v.03c1 1.57 2.06 2.86 3.16 3.84.28.25.56.48.84.69a8.11 8.11 0 002.63 1.31l13.69 3.75s1.33.41 3.8 1.13a738.2 738.2 0 0018.1 5 912.12 912.12 0 0029.25 7.15h.03a836.67 836.67 0 0023.6 5h.03a638.69 638.69 0 0038.6 6.44h.02c6.55.87 13.13 1.62 19.6 2.19a370.65 370.65 0 0031.8 1.37c8.8.05 17.89-.11 27.26-.4 13.64-.42 27.84-1.14 42.37-2 19.6-1.17 39.8-2.6 60.13-3.88 15.02-.94 30.1-1.8 45.03-2.44.4-.01.79-.04 1.18-.06 7.4-.3 14.77-.55 22.07-.72 4.98-.11 9.93-.18 14.84-.22l7.34-.03 124.82.28-8.66 35.94 3.5 1.5c1.75.63 4.96.93 6.47.94.85 0 1.75-.07 2.69-.25.3-.06.62-.14.93-.22l.94-.25c.63-.2 1.26-.42 1.88-.69 1.82-.79 3.53-1.93 4.78-3.3 0-.02.02-.03.03-.04a8.31 8.31 0 001.47-2.28l12.15-31.31 109.94.25c.75.37 1.47.74 2.22 1.09a93.4 93.4 0 0013.22 5.03c5.1 1.5 10.18 2.55 15.34 3.25a139.7 139.7 0 0013.5 1.16c3.06.14 6.14.21 9.31.25 6.35.07 12.98 0 20 0 10.41 0 20.32-.53 29.78-1.57a210.87 210.87 0 0037-7.22c4.9-1.42 9.61-3.02 14.19-4.78 1.52-.58 3.04-1.16 4.53-1.78a164.85 164.85 0 0012.94-6.06 155.57 155.57 0 0011.97-7 147.49 147.49 0 0030.4-26v-.03c.97-1.1 1.94-2.2 2.88-3.31v-.03c.94-1.12 1.87-2.26 2.78-3.41v-.03c2.72-3.46 5.31-7.02 7.75-10.72v-.03c.8-1.23 1.63-2.47 2.4-3.72v-.03c2.35-3.78 4.57-7.65 6.63-11.66v-.03a176.7 176.7 0 002-4.03v-.03c.65-1.35 1.32-2.72 1.94-4.1v-.03a187.5 187.5 0 003.56-8.4v-.03c.56-1.43 1.1-2.87 1.62-4.32v-.03a203.04 203.04 0 003.04-8.81v-.03c.47-1.49.93-3 1.37-4.5v-.03c.44-1.51.87-3.03 1.28-4.56v-.04c1.24-4.6 2.37-9.3 3.35-14.09v-.03c.32-1.59.6-3.2.9-4.81v-.03a285.52 285.52 0 004.16-35.22v-.03c.1-1.73.18-3.48.25-5.22v-.03c.14-3.5.25-7.01.28-10.57v-.03c.02-1.78.01-3.58 0-5.37 0-.64-.02-1.27-.03-1.9l.03-1.92c.01-1.8.02-3.59 0-5.37v-.03c-.03-3.56-.14-7.07-.28-10.56v-.04c-.07-1.74-.15-3.49-.25-5.21v-.04c-.7-12.15-2.08-23.9-4.16-35.21v-.04c-.3-1.6-.58-3.22-.9-4.8v-.04a235.8 235.8 0 00-3.35-14.1v-.02a221.9 221.9 0 00-1.28-4.57v-.03c-.44-1.5-.9-3-1.37-4.5v-.03a208.87 208.87 0 00-3.04-8.81v-.03c-.53-1.45-1.06-2.9-1.62-4.32v-.03a187.5 187.5 0 00-3.56-8.4v-.03c-.62-1.38-1.29-2.74-1.94-4.1v-.03a176.7 176.7 0 00-2-4.03v-.03c-2.06-4-4.28-7.88-6.63-11.66V110c-.77-1.25-1.6-2.49-2.4-3.72v-.03c-2.44-3.7-5.03-7.26-7.75-10.72v-.03c-.9-1.15-1.84-2.28-2.78-3.4v-.04c-.94-1.12-1.9-2.22-2.88-3.3v-.04a147.12 147.12 0 00-34.28-28.44 155.57 155.57 0 00-21.03-10.62c-1.49-.62-3-1.2-4.53-1.78a180.72 180.72 0 00-19.16-6.16 210.87 210.87 0 00-20.9-4.37c-3.64-.58-7.34-1.06-11.13-1.47A274.28 274.28 0 00766 34.3c-7.02 0-13.65-.07-20 0a273.32 273.32 0 00-13.87.5c-3.01.22-6 .51-8.94.9a102.27 102.27 0 00-19.72 4.67 93.4 93.4 0 00-8.84 3.62c-.75.35-1.47.72-2.22 1.1l-109.94.24-12.15-31.3a8.31 8.31 0 00-1.47-2.29l-.03-.03a14.07 14.07 0 00-4.78-3.31c-.62-.27-1.25-.5-1.88-.7l-.94-.24c-.31-.08-.62-.16-.93-.22-.94-.18-1.84-.25-2.7-.25z"
      />
      <path
        fill={color || DEFAULT_COLOR}
        d="M557.59 7c-1.51 0-4.72.3-6.47.94l-3.5 1.5 8.66 35.84-124.82.28c-77.96.17-166.52-11.5-232.93-9.5s-152.12 28-152.12 28l-13.7 3.78C13.48 73.14 7 165.21 7 234.63l.03 3.37-.03 3.38c0 69.4 6.47 161.48 25.72 166.78l13.69 3.78s85.7 26 152.12 28c66.41 2 154.97-9.67 232.93-9.5l124.82.28-8.66 35.84 3.5 1.5c1.75.63 4.96.93 6.47.94.85 0 1.75-.07 2.69-.25a18.4 18.4 0 003.75-1.16 14 14 0 004.78-3.28l.03-.03a8.32 8.32 0 001.47-2.28l12.15-31.25 109.94.25c23.9 11.94 45.51 10.72 73.6 10.72 133.24 0 187.62-86.59 186.99-201.38l-.03-2.34.03-2.34c.63-114.8-53.75-201.38-187-201.38-28.08 0-49.7-1.22-73.6 10.72l-109.93.25L570.31 14a8.32 8.32 0 00-1.47-2.28l-.03-.03a14 14 0 00-4.78-3.28 17.94 17.94 0 00-2.82-.94c-.31-.08-.62-.16-.93-.22-.94-.18-1.84-.25-2.7-.25z"
      />
      <path
        fill="#262626"
        d="M347.4 368.54c-33.36 0-65.3 1.8-94.8 5.07 25.65 48.71 97.98 30.26 205.55 31.53 49.69.58 89.54 1.88 121.53 2.37-47.16-23.33-133.53-38.97-232.28-38.97z"
        opacity={0.9}
      />
      <path
        d="M347.4 368.54c-3.2 0-6.38.03-9.56.07.82 16.17 6.43 30.25 14.6 38.84 4.67-.08 9.49-.2 14.43-.34-8.56-8.2-14.6-22.23-15.72-38.57h-3.75z"
        opacity={0.5}
      />
      <path
        fill="#212121"
        stroke="#191919"
        strokeWidth={5}
        d="M936.08 340.8l-5.1.6c-21.54 2.5-37.68 25.97-39.27 54.52l-.38 7.13 5.25-4.84c15.9-14.68 28.3-32.51 37.4-52.75l2.1-4.66z"
        color="#000"
        fontFamily="Bitstream Vera Sans"
        fontWeight={400}
        overflow="visible"
        style={{
          textIndent: 0,
          textAlign: "start",
          lineHeight: "normal",
          textTransform: "none",
          marker: "none",
        }}
      />
      <path
        fill="none"
        stroke="#292929"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={6}
        d="M730.54 351.8s79.67-22.6 105.37-31.98c26.84-9.8 98.86-39.14 98.86-39.14s-8.74 42.47-30.48 57.92c-77.22 54.87-232.69 53.85-232.69 53.85"
        opacity={0.5}
      />
      <path
        fill="url(#b)"
        d="M869.97 817.84l-4.44 2.34c1 1.16 1.8 2.43 2.38 3.85 4.8 11.71-10.74 29.23-26.88 35.78-.51.2-1.81.84-3.4 1.65l13.62-3.87c17.3-8.46 27.47-23.08 23-34a14.69 14.69 0 00-4.28-5.75z"
        transform="translate(-52.94 -486.7)"
      />
      <path
        fill="url(#c)"
        d="M878.55 813.38l-4.43 2.34c.99 1.16 1.8 2.43 2.37 3.84 4.8 11.72-10.73 29.24-26.87 35.79-.52.2-1.82.84-3.41 1.65l13.63-3.87c17.3-8.46 27.47-23.09 23-34a14.69 14.69 0 00-4.29-5.75z"
        transform="translate(-52.94 -486.7)"
      />
      <path
        fill="url(#d)"
        d="M884.74 811.96l-4.44 2.35c1 1.15 1.8 2.43 2.38 3.84 4.8 11.72-10.74 29.24-26.88 35.78-.51.21-1.8.84-3.4 1.66l13.62-3.88c17.3-8.46 27.47-23.08 23-34a14.69 14.69 0 00-4.28-5.75z"
        transform="translate(-52.94 -486.7)"
      />
      <path
        fill="url(#e)"
        d="M901.65 807.69l-6.19 1.84a18.27 18.27 0 012.03 5.47c3.12 16.04-20.96 34.29-43.03 38.5-3.4.65-28.88 8.58-32.16 8.8v4.13l41.44-12.15c26.29-5.5 44.95-22.44 41.88-38.25a18.91 18.91 0 00-3.97-8.34z"
        transform="translate(-52.94 -486.7)"
      />
      <path
        fill="url(#f)"
        d="M901.65 807.69l-6.19 1.84a18.27 18.27 0 012.03 5.47c3.12 16.04-20.96 34.29-43.03 38.5-3.4.65-28.88 8.58-32.16 8.8v4.13l41.44-12.15c26.29-5.5 44.95-22.44 41.88-38.25a18.91 18.91 0 00-3.97-8.34z"
        transform="translate(-52.94 -486.7)"
      />
      <path
        fill="url(#g)"
        d="M857.12 822.46l-3.96 2.1c.88 1.02 1.6 2.16 2.12 3.42 4.29 10.47-9.59 26.12-24 31.97-.47.19-1.63.75-3.05 1.48l12.17-3.46c15.46-7.56 24.54-20.62 20.55-30.38-.82-2-2.12-3.72-3.83-5.13z"
        transform="translate(-52.94 -486.7)"
      />
      <path
        fill="url(#h)"
        d="M843.32 826.03l-3.97 2.1c.89 1.03 1.6 2.16 2.12 3.43 4.29 10.47-9.59 26.12-24 31.96-.47.19-1.62.75-3.05 1.48l12.17-3.46c15.46-7.56 24.54-20.62 20.55-30.37-.82-2-2.12-3.72-3.82-5.14z"
        transform="translate(-52.94 -486.7)"
      />
      <path
        fill="url(#i)"
        d="M233.27 845.72c8.29-2.02 15.48-1.48 19.8 5.8l-2.5 17.89c-6.88 6.17-13.75 4.95-20.63.15l3.33-23.84z"
        transform="translate(-52.94 -486.7)"
      />
      <path
        fill="url(#j)"
        d="M253.54 848.99c8.15-1.21 15.17-.58 18.84 5.5l-2.37 17.04c-6.48 2.97-12.98 5.2-19.63.15l3.16-22.7z"
        transform="translate(-52.94 -486.7)"
      />
      <path
        fill="#191919"
        d="M347.4 366.05a870.2 870.2 0 00-95.1 5.06l-3.65.4 1.72 3.26c6.67 12.66 16.56 21.11 29.06 26.44 12.5 5.32 27.57 7.6 45.1 8.43 35.04 1.65 79.95-2.63 133.59-2 49.66.59 89.5 1.88 121.53 2.38l1.12-4.75c-47.85-23.68-134.35-39.22-233.37-39.22zm0 5c91.17 0 171.75 13.48 220.1 33.72-29.96-.58-65.22-1.6-109.32-2.13-53.94-.63-98.98 3.66-133.4 2.03-17.22-.8-31.77-3.1-43.41-8.06-10.45-4.45-18.49-11.15-24.5-20.9a867.22 867.22 0 0190.53-4.66z"
        color="#000"
        fontFamily="Bitstream Vera Sans"
        fontWeight={400}
        opacity={0.9}
        overflow="visible"
        style={{
          textIndent: 0,
          textAlign: "start",
          lineHeight: "normal",
          textTransform: "none",
          marker: "none",
        }}
      />
      <path
        fill="#262626"
        stroke="#191919"
        strokeWidth={5}
        d="M207.56 120.69l-77.75 12.47c-27.15 4.35-48.95 48.77-51 104.84 2.05 56.07 23.85 100.49 51 104.84l77.75 12.47c13.3 0 24-10.7 24-24V144.7c0-13.3-10.7-24-24-24zm431.46-34.22c-2.96 0-5.89.33-8.78.97l-.03-.03-63.84 12.3c-17.73 6.61-32 14.28-32 32v212.57c0 17.73 14.27 25.4 32 32l63.84 12.31.03-.03c2.9.64 5.82.97 8.78.97 45.4 0 82.2-57.36 82.32-151.53-.12-94.17-36.92-151.53-82.32-151.53z"
        opacity={0.9}
      />
      <path
        fill="#262626"
        d="M347.4 107.46c-33.36 0-65.3-1.8-94.8-5.07 25.65-48.7 97.98-30.26 205.55-31.53 49.69-.58 89.54-1.88 121.53-2.37-47.16 23.33-133.53 38.97-232.28 38.97z"
        opacity={0.9}
      />
      <path
        d="M347.4 107.46c-3.2 0-6.38-.03-9.56-.07.82-16.17 6.43-30.25 14.6-38.84 4.67.08 9.49.2 14.43.34-8.56 8.2-14.6 22.23-15.72 38.57h-3.75z"
        opacity={0.5}
      />
      <path
        fill="#212121"
        stroke="#191919"
        strokeWidth={5}
        d="M936.08 135.19l-5.1-.6c-21.54-2.51-37.68-25.98-39.27-54.53l-.38-7.12 5.25 4.84c15.9 14.68 28.3 32.5 37.4 52.75l2.1 4.66z"
        color="#000"
        fontFamily="Bitstream Vera Sans"
        fontWeight={400}
        overflow="visible"
        style={{
          textIndent: 0,
          textAlign: "start",
          lineHeight: "normal",
          textTransform: "none",
          marker: "none",
        }}
      />
      <path
        fill="none"
        stroke="#292929"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={6}
        d="M730.54 124.2s79.67 22.6 105.37 31.98c26.84 9.8 98.86 39.14 98.86 39.14s-8.74-42.47-30.48-57.92C827.07 82.53 671.6 83.55 671.6 83.55"
        opacity={0.5}
      />
      <path
        fill="url(#k)"
        d="M869.97 631.55l-4.44-2.35c1-1.15 1.8-2.42 2.38-3.84 4.8-11.72-10.74-29.24-26.88-35.78a60.6 60.6 0 01-3.4-1.66l13.62 3.88c17.3 8.46 27.47 23.08 23 34a14.69 14.69 0 01-4.28 5.75z"
        transform="translate(-52.94 -486.7)"
      />
      <path
        fill="url(#l)"
        d="M878.55 636.01l-4.43-2.34c.99-1.16 1.8-2.43 2.37-3.85 4.8-11.72-10.73-29.23-26.87-35.78a60.6 60.6 0 01-3.41-1.66l13.63 3.88c17.3 8.46 27.47 23.08 23 34a14.69 14.69 0 01-4.29 5.75z"
        transform="translate(-52.94 -486.7)"
      />
      <path
        fill="url(#m)"
        d="M884.74 637.42l-4.44-2.34c1-1.16 1.8-2.43 2.38-3.84 4.8-11.72-10.74-29.24-26.88-35.79a60.6 60.6 0 01-3.4-1.65l13.62 3.87c17.3 8.46 27.47 23.09 23 34a14.69 14.69 0 01-4.28 5.75z"
        transform="translate(-52.94 -486.7)"
      />
      <path
        fill="url(#n)"
        d="M901.65 641.7l-6.19-1.85a18.27 18.27 0 002.03-5.47c3.12-16.03-20.96-34.28-43.03-38.5-3.4-.64-28.88-8.57-32.16-8.8v-4.12l41.44 12.14c26.29 5.5 44.95 22.45 41.88 38.25a18.91 18.91 0 01-3.97 8.35z"
        transform="translate(-52.94 -486.7)"
      />
      <path
        fill="url(#o)"
        d="M901.65 641.7l-6.19-1.85a18.27 18.27 0 002.03-5.47c3.12-16.03-20.96-34.28-43.03-38.5-3.4-.64-28.88-8.57-32.16-8.8v-4.12l41.44 12.14c26.29 5.5 44.95 22.45 41.88 38.25a18.91 18.91 0 01-3.97 8.35z"
        transform="translate(-52.94 -486.7)"
      />
      <path
        fill="url(#p)"
        d="M857.12 626.93l-3.96-2.1c.88-1.03 1.6-2.16 2.12-3.43 4.29-10.47-9.59-26.12-24-31.96-.47-.19-1.63-.75-3.05-1.48l12.17 3.46c15.46 7.55 24.54 20.62 20.55 30.37-.82 2-2.12 3.72-3.83 5.14z"
        transform="translate(-52.94 -486.7)"
      />
      <path
        fill="url(#q)"
        d="M843.32 623.36l-3.97-2.1c.89-1.03 1.6-2.17 2.12-3.43 4.29-10.47-9.59-26.12-24-31.97-.47-.18-1.62-.75-3.05-1.48l12.17 3.47c15.46 7.55 24.54 20.62 20.55 30.37-.82 2-2.12 3.72-3.82 5.14z"
        transform="translate(-52.94 -486.7)"
      />
      <path
        fill="url(#r)"
        d="M233.27 603.66c8.29 2.03 15.48 1.48 19.8-5.78l-2.5-17.9c-6.88-6.17-13.75-4.95-20.63-.16l3.33 23.84z"
        transform="translate(-52.94 -486.7)"
      />
      <path
        fill="url(#s)"
        d="M253.54 600.4c8.15 1.21 15.17.57 18.84-5.5l-2.37-17.04c-6.48-2.98-12.98-5.21-19.63-.15l3.16 22.69z"
        transform="translate(-52.94 -486.7)"
      />
      <path
        fill="#191919"
        d="M347.4 109.94a870.2 870.2 0 01-95.1-5.07l-3.65-.4 1.72-3.25c6.67-12.67 16.56-21.12 29.06-26.44s27.57-7.61 45.1-8.44c35.04-1.65 79.95 2.63 133.59 2 49.66-.58 89.5-1.88 121.53-2.37l1.12 4.75c-47.85 23.67-134.35 39.22-233.37 39.22zm0-5c91.17 0 171.75-13.48 220.1-33.72-29.96.58-65.22 1.6-109.32 2.12-53.94.64-98.98-3.65-133.4-2.03-17.22.81-31.77 3.1-43.41 8.06-10.45 4.46-18.49 11.16-24.5 20.91a867.22 867.22 0 0090.53 4.66z"
        color="#000"
        fontFamily="Bitstream Vera Sans"
        fontWeight={400}
        opacity={0.9}
        overflow="visible"
        style={{
          textIndent: 0,
          textAlign: "start",
          lineHeight: "normal",
          textTransform: "none",
          marker: "none",
        }}
      />
    </svg>
  );
}
