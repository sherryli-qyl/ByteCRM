import React,{Fragment} from 'react';
import Container from '@material-ui/core/Container';
import "./Activities.scss";
import NaviBar from './components/NaviBar/NaviBar';
const Activities =()=>{

    return(
       <div className='activitiesPage'>
        <Container maxWidth="md">
          <NaviBar />
        </Container>
        </div>
    )
}

export default Activities;