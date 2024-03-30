import Card from "./Card";

const Cardbar = ({ cards }) => {

 return (
    <div className="cardbar">
      <div
        style={{
          display: "flex"
        }}
      >
        {cards.map((card, index) => (
          <Card key={index} imageUrl={card.imageUrl} />
        ))}
      </div>
    </div>
 );
};

export default Cardbar;
