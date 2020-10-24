
const defaultState = {
    reload:false,
}
const reducer = (state = defaultState,action)=>{
    const {reload} = action
    switch(action.type){
        case 'save':
            console.log(action.reload);
            return {...state, reload}

        default:
            return state;
    }

};

module.exports = {reducer};