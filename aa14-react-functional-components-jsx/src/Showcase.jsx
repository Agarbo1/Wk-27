import squadSquirtle from './images/squirtle-steep-512x512.png'

function Showcase() {
    //JS SHOULD ALWAYS BE ABOVE RETURN
    const favPokemon = 'Squirtle'
    const pokeChar = {
        type: "water",
        move: 'Bubblebeam'
    }

    return (
      <div>
        <h1>{favPokemon}'s Showcase Component</h1>
        <img
            src={squadSquirtle}
            alt='Squirtle'
        />
        <h2>Squirtle's type is <span style={{backgroundColor: 'green', color: 'white'}}>{pokeChar.type}</span> and one of his moves is<span style={{backgroundColor: 'green', color: 'white'}}> {pokeChar.move}</span></h2>
      </div>
    );
  }

  export default Showcase;
