import "../css/main.scss";
import Header from "../components/Header";
import OperationSec from "../components/OperationSec";
import OpSec from "../components/OpSec";
export default function Driver() {
  return (
    <>
      <Header pages={"Operation"}/>
      {/* <OperationSec /> */}
      <OpSec/>
    </>
  );
}
