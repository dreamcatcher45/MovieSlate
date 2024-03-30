import Card from "./Card";

const Cardbar = ({ cards, onCardClick }) => {
  return (
    <div className="cardbar">
      <div
        style={{
          display: "flex",
        }}
      >
        {cards.map((card, index) => (
          <Card
            key={index}
            imageUrl={card.imageUrl}
            id={card.id}
            onCardClick={onCardClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Cardbar;
