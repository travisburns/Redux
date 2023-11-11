
import { combineReducers } from "redux";
import { ADD_CHARACTER } from "../actions";
import characters_json from '../data/characters.json'

function Characters(state = characters_json, action) {
  switch(action.type) {
    case ADD_CHARACTER:
      let characters = state.filter(item => item.id !== action.id);
      return characters;
    default: 
    return state;
  }
}


export default Characters;


