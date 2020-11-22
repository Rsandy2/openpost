import "../css/Card.css";

export default function Card({ cardID, cardImage, cardDesc }) {
  return (
    <div className="card">
      <div className="card-woman">
        <a className="woman-profile" href="#">
          <img src={cardImage} />
        </a>

        <div className="woman-name">
          <div className="title">Hero</div>
          {cardID}
        </div>
      </div>
      <div className="text">
        <p>{cardDesc}</p>
      </div>
    </div>
  );
}
