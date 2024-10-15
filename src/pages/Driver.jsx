import "../css/main.scss";
import Header from "../components/Header";
import DriverSec from "../components/DriverSec";
import "./pages.scss";
export default function Driver() {
  return (
    <div className="pages-sec">
      <Header pages={"Driver"} />
      <DriverSec />
    </div>
  );
}
