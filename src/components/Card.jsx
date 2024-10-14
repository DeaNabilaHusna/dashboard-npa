import "./card.scss";
export default function Card({ status, number, ket }) {
  return (
    <>
      <div className="card-box">
        <div className="card-content">
          <h2 className="status">{status}</h2>
          <h1 className="number">{number}</h1>
          <p className="ket">{ket}</p>
        </div>
      </div>
    </>
  );
}
