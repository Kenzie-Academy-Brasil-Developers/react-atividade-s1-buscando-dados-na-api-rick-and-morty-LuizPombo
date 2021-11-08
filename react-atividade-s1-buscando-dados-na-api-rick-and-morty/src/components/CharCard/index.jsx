const CharCard = ({ character }) => {
  return (
    <div className="cartão">
      <img src={character.image} alt={character.name} />
      <p>{character.name}</p>
    </div>
  );
};

export default CharCard;
