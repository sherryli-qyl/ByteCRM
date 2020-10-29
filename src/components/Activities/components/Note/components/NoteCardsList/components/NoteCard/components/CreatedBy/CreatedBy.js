import React from 'react';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CreatedBy.scss';

const CreatedBy = (props) => (
  <div className="createdby-container">
    <div className="createdby-user-icon">
      <FontAwesomeIcon icon={faUserCircle} />
    </div>
    <span className="createdby-info">
      {' '}
      {props.createdBy}
      {' '}
      left a note
    </span>
  </div>
);

// class CreatedBy extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render(){
//     const { createdBy } = this.props;
//     const authorName = JSON.stringify(createdBy, function (key, value) {
//       if (key == "firstname") {
//         return value;
//       } else {
//         return null;
//       }
//     });

//     return (
//       <div className="createdby-container">
//         <div className="createdby-user-icon">
//           <FontAwesomeIcon icon={faUserCircle} />
//         </div>
//         <span className="createdby-info">
//           {authorName} left a note
//         </span>
//       </div>
//     )
//   }
// }

export default CreatedBy;
