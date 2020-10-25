import { combineReducers } from 'redux';
import reload from './components/reload';
import contact from './components/contact';



const reducer = combineReducers({
    reload,
    contact,
})


export default reducer;