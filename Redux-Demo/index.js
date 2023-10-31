console.log("Store: that holds the state of your application")
console.log("action: describes what happened in the application")
console.log("Reducer: which handles the action and decides how to update the state")



//Cake shop scenerio //Redux //Purpose
//shop                Action   Describes what happened
//shopkeeper          Reducer    ties the store and actions together


//Three principles

// First principle

// The global state of your application is sotred as an object inside a single store
// Maintain our application state in a single object which would be managed by the redux store

//Cake shop

//Lets assume we are tracking the number of cakes on the shelf
// {
// numberOfCakes: 10
//}

//second princple the only way to change the state is to dispatch an action, an object that describes what happened. 
//to update the state of your app, you need to let redux know about taht with ana ction not alloweed to directly update the state object

//Cake Shop scan the QR code and place an order -CAKE_ORDERED
// {
  //  type:`CAKE_ORDERED`
//}

//Actions

//The only way your application can interact with the store
//carry some information from your app to the redux store
//plain javascript objects
// Have a type property that describes something that happened in the ap0plication
//the type property is typically defined as string constants

const CAKE_ORDERED ='CAKE_ORDERED'


function orderCake() {
    return {
    type: CAKE_ORDERED,
    quantity: 1
    }
}

const initialState = {
    numOfCakes:10,
    anotherProperty: 0
}


// (previousState, action) => newState

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case CAKE_ORDERED:
            return {
                ...state, //make a copy of the state object and then update the numofcakes property
                numOfCakes: state.numOfCakes - 1
            }
          default: 
          return state  
        }   
}

