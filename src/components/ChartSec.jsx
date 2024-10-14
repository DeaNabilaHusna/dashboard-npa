import "./chartsec.scss";
import "../css/main.scss";
import Line from "./chart/Line";

export default function ChartSec({ name }) {
  return (
    <div className="box">
      <h2>{name ? `* ${name}` : '\u00A0'}</h2>
      <div className="chart-container">
      <Line />
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Area / Region</th>
            <th>Vol</th>
            <th>Wow</th>
            <th>MoM</th>
            <th>YoY</th>
            <th>Ytd</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Area 1</td>
            <td>146,68</td>
            <td>-0,77%</td>
            <td>-2.31%</td>
            <td>12.11%</td>
            <td>13.81%</td>
          </tr>
          
        </tbody>
      </table>
      </div>
    </div>
  );
}
