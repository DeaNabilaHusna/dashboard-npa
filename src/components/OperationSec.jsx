import ChartSec from "./ChartSec";
import "./operationsec.scss";
import Card from "./Card";

export default function OperationSec() {
  return (
    <div className="operation-container">
      <div className="operation-sec">
        <Card status={"2G Down"} number={"38"} ket={"Site(s)"} />
        <Card status={"4G Down"} number={"33"} ket={"Site(s)"} />
        <Card status={"5G Down"} number={"0"} ket={"Site(s)"} />
        <Card
          status={"Alarm Impact Services BTS"}
          number={"38 | 132"}
          ket={"Site(s)"}
        />
        <Card status={"Alarm zero payload"} number={"180"} ket={"2G 4G(s)"} />
        <Card status={"Trm/Pwr/Pl"} number={"12"} ket={"Site(s)"} />
        <Card
          status={"BTS High CPU Load"}
          number={"1"}
          ket={"High CPU Load(s)"}
        />
        <Card
          status={"Bad-Erab-Setup"}
          number={"1"}
          ket={"Erab Setup Degraded"}
        />
        
        <ChartSec />
        <ChartSec />
        <ChartSec />
        <ChartSec />
        <ChartSec />
        <ChartSec />
        <ChartSec />

        <div className="stacked-column">
          <Card status={"BTS Flicker"} number={"1"} ket={"BTS flicker"} />
          <Card status={"Laccima Reject"} number={"4"} ket={"Laccima Rejected"} />
          <Card status={"Ubbp Stolen"} number={"7"} ket={"Board Not In Position"} />
        </div>
      </div>
    </div>
  );
}
