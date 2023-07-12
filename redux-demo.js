const redux = require('redux');


const counterReducer = (state = {counter:0}, action) => {
    if(action.type === 'inc'){
        return {
            counter: state.counter + 1,
        }
    }
    else if(action.type === 'dec'){
        return {
            counter: state.counter - 1,
        };
    }  
};


const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};
store.subscribe(counterSubscriber);


store.dispatch({type:'inc'});
store.dispatch({type:'inc'});
store.dispatch({type:'inc'});
store.dispatch({type:'dec'});