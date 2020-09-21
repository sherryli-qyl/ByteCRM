import React,{Fragment} from 'react';
import Container from '@material-ui/core/Container';
import MeetingCard from './components/MeetingCard';
import MeetingControl from'./components/MeetingControl';
class App extends React.Component {
    render(){
    return (
      <Fragment>
          <Container maxWidth="md">
            <MeetingControl />
            <MeetingCard />
          </Container>
      </Fragment>
    );
  }
  }
  
  export default App;
  