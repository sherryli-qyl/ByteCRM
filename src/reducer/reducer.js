import { combineReducers } from 'redux';
import reload from './components/reload';
import contact from './components/contact';
import user from './components/user';

const reducer = combineReducers({
  reload,
  contact,
  user,
});

export default reducer;
