import CharCard from "../CharCard";

const Characters = ({ characterList }) => {
  return (
    <div>
      <h1>Meus personagens</h1>
      {characterList.map((character) => (
        <div className={character.status}>
          <CharCard character={character} key={character.id} />
        </div>
      ))}
    </div>
  );
};

export default Characters;
