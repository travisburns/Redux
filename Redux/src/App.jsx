import { useState, Component } from 'react'

import './App.css'


import {createStore} from 'redux'
import { Provider } from 'react-redux'  //Provider should be surrounding the app, this allows all props to be utilized across all components

import characters from './reducers/index.js'
import { addCharacterById } from './actions/index.js'

import CharacterList from './components/CharacterList.jsx'




function App() {
  const store = createStore(characters)

  console.log('store', store.getState());
  store.subscribe(() => console.log("store", store.getState()));
  store.dispatch(addCharacterById(2))
  console.log("This is character:")
  return (
    <>
    <Provider store ={store}>
      <h1>Super Squad</h1>
    <CharacterList />
    </Provider>
    </>
  )
}

export default App


// function App() {
//   const store = createStore(characters)

//   console.log('this is store.getState()', store.getState());
//   return (
//     <>
//     <Provider store={store}>

//     </Provider>
    
//     </>
//   )
// }

// export default App




// function App() {
//   const store = createStore(characters)

// console.log('store', store.getState());
//   return (
//     <>
//     <Provider store ={store}>

//     </Provider>
//     </>
//   )

// }

// export default App

// function App() {
// const store = createStore(characters)
// console.log('store.getState()', store.getState());
// store.subscribe(() => console.log('store', store.getState()));
// store.dispatch(addCharacterById(2))

//   return (
//     <Provider store={store}>
//  <>
//       <div>
//         </div>
       
//     </>
//     </Provider>
   
//   )
// }

// export default App




// const store = createStore(characters)

// function App() {
//   const [count, setCount] = useState(0)
// console.log('store.getState()', store.getState());
// store.subscribe(() => console.log('store', store.getState()));
// store.dispatch(addCharacterById(2))

//   return (
//     <Provider store={store}>
//  <>
//       <div>
//         </div>
       
//     </>
//     </Provider>
   
//   )
// }

// export default App


