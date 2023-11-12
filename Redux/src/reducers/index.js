// import characters_json from '../data/characters.json'
// import { ADD_CHARACTER } from '../actions/index.js'

// function characters(state = characters_json, action) {
//   switch(action.type) {
//     case ADD_CHARACTER:
//       let characters = state.filter(item => item.id !== action.id);
//       return characters;  
//     default:
//         return state;
//   }  
// }

// export default characters;

// import { ADD_CHARACTER } from '../actions';
// import characters_json from '../data/characters.json'

// function characters(state = characters_json, action) {
//   switch(action.type) {
//     case ADD_CHARACTER:
//       default:
//         return state; 
//   }
// }


// export default characters;

// import { ADD_CHARACTER } from "../actions";
// import characters_json from '../data/characters.json'

// function characters(state = characters_json, action) {
//   switch(action.type) {
//     case ADD_CHARACTER:
//       default:
//         return state;
//   }
// }

// export default characters;


// import { ADD_CHARACTER } from "../actions";
// import characters_json from '../data/characters.json'

// function characters(state = characters_json, action) {
//   switch(action.type) {
//     default: 
//     return state;
//   }
// }



// import { ADD_CHARACTER } from "../actions"
// import characters_json from '../data/characters.json'

// function characters (state = characters.json, action) {
//   switch(action.type) {
//     default: 
//       return state;
//   }
// }

// import {ADD_CHARACTER} from "../actions";
// import characters_json from '../data/characters.json'

// function characters(state = characters.json, action) {
//   switch(action) {
//     default:
//       return state;
//   }
// }

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



const rootReducer = combineReducers({
  characters,
  heroes
})


export default rootReducer

// import { ADD_CHARACTER } from "../actions";
// import characters_json from '../data/characters.json'

// function characters(state = characters_json, action) {
//   switch(action.type) {
//     default:
//       return state
//   }
// }



// import {ADD_CHARACTER} from "../actions";
// import characters_json from '../data/characters.json'

// function characters(state = characters_json, action) {
//   switch(action) {
//     default:
//       return state
//   }
// }

// import { ADD_CHARACTER } from "../actions";
// import characters_json from '../data/characters.json'

// function characters(state = characters_json, action) {
//   switch(action.type) {
//     default:
//       return state;
//   }
// }


// export default characters

