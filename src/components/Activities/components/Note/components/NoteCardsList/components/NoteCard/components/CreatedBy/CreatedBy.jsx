import React from 'react';
import PropTypes from 'prop-types';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CreatedBy.scss';

const CreatedBy = (props) => {
  const { createdBy } = props;
  return (
    <div className="createdby-container">
      <div className="createdby-user-icon">
        <FontAwesomeIcon icon={faUserCircle} />
      </div>
      <span className="createdby-info">
        {' '}
        {createdBy}
        {' '}
        left a note
      </span>
    </div>
  );
};

CreatedBy.defaultProps = {
  createdBy: undefined,
};

CreatedBy.propTypes = {
  createdBy: PropTypes.string,
};

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
