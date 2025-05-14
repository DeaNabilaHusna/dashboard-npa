import "./opsec.scss";
import Card from "./Card";
import ChartSec from "./ChartSec";

const cardData = [
  { status: "Bad-Erab-Setup", number: "1", ket: "Erab Setup Degraded" },
  { status: "BTS Flicker", number: "1", ket: "BTS flicker" },
  { status: "Laccima Reject", number: "4", ket: "Laccima Rejected" },
  { status: "Ubbp Stolen", number: "7", ket: "Board Not In Position" },
  { status: "Alarm Zero Payload", number: "180", ket: "2G & 4G Zero Payload" },
];

const tableRows = [
  ["SGDPS8", "98%"],
  ["SGDPS8", "98%"],
  ["SGDPS8", "98%"],
];

const TableCard = ({ title }) => (
  <div className="column-1-item">
    <h3 className="title">{title}</h3>
    <table>
      <tbody>
        {tableRows.map((row, i) => (
          <tr key={i}>
            <td>{row[0]}</td>
            <td>{row[1]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default function OpSec() {
  return (
    <div className="op-sec">
      <div className="card">
        {cardData.map((card, i) => (
          <Card key={i} {...card} />
        ))}
      </div>

      <div className="op-sec sec-2">
        <div className="cpu-load">
          <h3 className="title">BSC CPU LOAD & CRITICAL ALARM</h3>
          <div className="cpu-load-item">
            {[...cardData, ...cardData].map((card, i) => (
              <Card key={i} {...card} />
            ))}
          </div>
        </div>

        <div className="sec-2 line-2">
          <div className="column-1">
            <TableCard title="4G Attach SR" />
            <TableCard title="4G Attach SR" />
          </div>
          <div className="column-2">
            {cardData.slice(1, 4).map((card, i) => (
              <Card key={i} {...card} />
            ))}
          </div>
        </div>
      </div>

      <div className="graph">
        <ChartSec />
        <ChartSec />
        <ChartSec />
      </div>
      <div className="graph-2">
        <ChartSec />
        <ChartSec />
        <ChartSec />
        <ChartSec />
      </div>
    </div>
  );
}
