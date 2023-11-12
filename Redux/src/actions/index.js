// export const ADD_CHARACTER = 'ADD_CHARACTER';

// export function addCharacterById(id) {
//     const action = {
//         type: ADD_CHARACTER,
//         id 
//     }
//     return action;
// }

// export default addCharacterById



export const ADD_CHARACTER = 'ADD_CHARACTER'

export function addCharacterById(id) {
    const action = {
        type: ADD_CHARACTER,
        id //key is same is paramater being passed from addcharacterbyid
    }
    return action;
}

export default addCharacterById