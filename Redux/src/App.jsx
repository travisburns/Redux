import { useState, Component } from 'react'

import './App.css'


import {createStore} from 'redux'
import { Provider } from 'react-redux'

import characters from './reducers/index.js'
import { addCharacterById } from './actions/index.js'

const store = createStore(characters)

function App() {
  const [count, setCount] = useState(0)
console.log('store.getState()', store.getState());
store.subscribe(() => console.log('store', store.getState()));
store.dispatch(addCharacterById(2))

  return (
    <Provider store={store}>
 <>
      <div>
        </div>
       
    </>
    </Provider>
   
  )
}

export default App
