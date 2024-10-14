import ChartSec from "./ChartSec";
import './driversec.scss';
export default function DriverSec() {
  return (
    <div className="driversec">
      <ChartSec name="RRC User" />
      <ChartSec name="FB Share" />
      <ChartSec name="PGB" />
      <ChartSec name="RGB" />
    </div>
  );
}
