import React from 'react';
import SearchBar from '../SearchBar';
import Select from '../Select';
import HintBar from '../HintBar';
import Loading from '../../../Loading';
import './Dropdown.scss';

const Dropdown = ({
  showDropdown,
  textInputHint,
  checkInput,
  userList,
  searchList,
  loading,
  textInput,
  enableCleanBtn,
  handleInputChange,
  handleCleanInput,
  handleRemoveUser,
  handleAddUser,
  userSelectHint,
}) => {
  let className = 'userDropdown ';
  if (showDropdown) {
    className += 'userDropdown__active';
  }
  return (
    <div className={className}>
      <div className="userDropdown__corner" />
      <div className="userDropdown__inner">
        <div className="userDropdown__inner__wrapper">
          <SearchBar
            textInput={textInput}
            enableCleanBtn={enableCleanBtn}
            handleInputChange={handleInputChange}
            handleCleanInput={handleCleanInput}
          />
        </div>
        {!checkInput
          ? (
            <Select
              label="users"
              userList={userList}
              searchList={searchList}
              userSelectHint={userSelectHint}
              handleRemoveUser={handleRemoveUser}
              handleAddUser={handleAddUser}
            />
          )
          : loading
            ? <Loading variant="bar" />
            : (
              <HintBar>
                {textInputHint}
              </HintBar>
            )}
      </div>
    </div>
  );
};

export default Dropdown;
