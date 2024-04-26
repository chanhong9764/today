import React from 'react';
import { Polygon, Svg } from 'react-native-svg';

function Graph() {
  // 육각형의 각 꼭지점을 계산합니다.
  const points: string = Array.from({ length: 6 })
    .map((_, i) => {
      const angleDeg: number = 60 * i - 30;
      const angleRad: number = (Math.PI / 180) * angleDeg;
      const x: number = 50 + 40 * Math.cos(angleRad);
      const y: number = 50 + 40 * Math.sin(angleRad);

      return `${x},${y}`;
    })
    .join(' ');

  return (
    <Svg>
      <Polygon points={points} fill="none" stroke="blue" strokeWidth="2" />
    </Svg>
  );
}

export default Graph;
