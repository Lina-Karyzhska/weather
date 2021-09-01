import { ReactElement } from "react";

export default function AxisTick(props: any): ReactElement {
  const { x, payload } = props;

  return (
    <g transform={`translate(${x}, 0)`}>
      <text x={0} y={0} dy={16} textAnchor="middle" fill="#0b0b91">
        {payload.value}
      </text>
    </g>
  );
}
