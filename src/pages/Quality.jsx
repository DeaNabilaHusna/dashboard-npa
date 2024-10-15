import "../css/main.scss";
import Header from "../components/Header";
import QualitySec from "../components/QualitySec";
import "./pages.scss";
export default function Driver() {
  return (
    <div className="pages-sec">
      <Header pages={"Quality"}/>
      <QualitySec />
    </div>
  );
}
