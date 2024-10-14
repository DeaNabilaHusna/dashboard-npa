import "./opsec.scss";
import Card from "./Card";
import ChartSec from "./ChartSec";
export default function OpSec() {
  return (
    <>
      <div className="op-sec">
        <div className="card">
          <Card
            status={"Bad-Erab-Setup"}
            number={"1"}
            ket={"Erab Setup Degraded"}
          />
          <Card status={"BTS Flicker"} number={"1"} ket={"BTS flicker"} />
          <Card
            status={"Laccima Reject"}
            number={"4"}
            ket={"Laccima Rejected"}
          />
          <Card
            status={"Ubbp Stolen"}
            number={"7"}
            ket={"Board Not In Position"}
          />
        </div>
        <div className="graph">
          <ChartSec />
          <ChartSec />
          <ChartSec />
        </div>
        <div className="graph-2">
            <ChartSec/>
            <ChartSec/>
            <ChartSec/>
            <ChartSec/>
        </div>
      </div>
    </>
  );
}
