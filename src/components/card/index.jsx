import "./style.css";

const Card = ({ card, key }) => {
  return (
    <div key={key}>
      <img src={card.image} alt={card.code} className="card" />;
    </div>
  );
};

export default Card;
