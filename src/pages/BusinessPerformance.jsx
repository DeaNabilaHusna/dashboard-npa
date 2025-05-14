import "../css/main.scss";
import Header from "../components/Header";
import PerformanceSec from "../components/PerformanceSec";
import "./pages.scss";
// import "./business.scss";

export default function BusinessPerformance() {
  return (
    <div>
      <Header pages={"Business Performance"} />
      <PerformanceSec />
    </div>
  );
}
