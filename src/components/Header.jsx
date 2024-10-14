import "../css/main.scss";
import "./header.scss";
import Logo from "../assets/images/logo.png";
import Button from "./button/Button";

export default function Header({ pages }) {
  return (
    <div className="header">
      <header>
        <div>
          <img src={Logo} alt="logo" />
        </div>
      </header>
      <div className="nav">
        <div className="pages">
          <h1>{pages}</h1>
          <h5>Actual Date (Week xx)</h5>
        </div>
        <div className="navigasi">
          <ul className="flex-list">
            <li>
              <Button name="Level" />
            </li>
            <li>
              <Button name="Region" />
            </li>
            <li>
              <Button name="NOP" />
            </li>
            <li>
              <Button name="Kabupaten" />
            </li>
            <li>
              <Button name="Kecamatan" />
            </li>
            <li>
              <Button name="Week" />
            </li>
          </ul>
        </div>
        <div>
          {/* <Button name="Export .csv">
            
          </Button> */}
          <button className="export"><h3>Export .csv</h3></button>
        </div>
      </div>
    </div>
  );
}
