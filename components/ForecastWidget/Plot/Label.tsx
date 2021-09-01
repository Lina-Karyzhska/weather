import { ReactElement } from "react";

interface ICustomizedLabelProps {
  x: number,
  y: number,
  value: string,
  color: string,
}

export const renderCustomizedLabel = ({ x, y, value, color }: ICustomizedLabelProps): ReactElement => {
  return (
    <g>
      <rect x={x - 15} y={y - 10} width={30} height="20" rx="5" ry="5" style={{ fill: color }} />

      <text x={x} y={y + 1} fill="#fff" textAnchor="middle" dominantBaseline="middle">
        {value}
      </text>
    </g>
  );
};
