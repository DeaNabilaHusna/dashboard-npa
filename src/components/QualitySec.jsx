import ChartSec from "./ChartSec";
import './qualitysec.scss';
export default function QualitySec() {
  return (
    <div className="qualitysec">
      <ChartSec name="Internal" />
      <ChartSec />
      <ChartSec />
      <ChartSec />
    </div>
  );
}
