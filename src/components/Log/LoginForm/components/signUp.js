import React from 'react';
import { Link } from 'react-router-dom';

const ToSignUpPage = () => {
  return (
    <div>
      <p className="signUpPara">
        Don't have an account? &nbsp;
        <Link className="linkBtn" to="/reg">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default ToSignUpPage;
