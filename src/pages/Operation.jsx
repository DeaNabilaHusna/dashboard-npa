import "../css/main.scss";
import Header from "../components/Header";
import OpSec from "../components/OpSec";
import "./pages.scss";
export default function Driver() {
  return (
    <div className="pages-sec">
      <Header pages={"Operation"}/>
      <OpSec/>
    </div>
  );
}
