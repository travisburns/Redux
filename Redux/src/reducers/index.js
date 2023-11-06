import characters_json from '../data/characters.json'
import { ADD_CHARACTER } from '../actions/index.js'

function characters(state = characters_json, action) {
  switch(action.type) {
    case ADD_CHARACTER:
      let characters = state.filter(item => item.id !== action.id);
      return characters;  
    default:
        return state;
  }  
}

export default characters;

