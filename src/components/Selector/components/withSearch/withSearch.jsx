import React from 'react';
import {SearchSelectsLocal, SearchSelectsRemote, ItemSelected} from '../../../../lib/Search'


const currentUser = JSON.parse(localStorage.getItem('user'));

const withSearch = (Component) => {
  class Wrapper extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        error: null,
        currentUser,
        loading: false,
        searchList: [],
        checkInput: false,
        textInputHint: '',
      };

      this.search = this.search.bind(this);
      this.handleSelect = this.handleSelect.bind(this);
      this.handleRemove = this.handleRemove.bind(this);
    }

    handleSelect(id){
        const newSearchList = ItemSelected(this.state.searchList, id, true);
        this.setState({
            searchList: newSearchList
        })
    }

    handleRemove(id){
        const newSearchList = ItemSelected(this.state.searchList, id, false);
        this.setState({
            searchList: newSearchList
        })
    }

    search(text,localList,fetch) {
        const userId = this.state.currentUser.id;
        let newHint = '';
        const newList = SearchSelectsLocal(localList, text.toUpperCase());
        if (text.length === 0) {
            this.setState({
                searchList: [],
                checkInput: false,
            });
        } else if (newList.length > 0 && text.length !== 0) {
            this.setState({
                searchList: newList,
                checkInput: false,
            });
        } else if (text.length > 0 && text.length < 3 && newList.length === 0) {
            newHint = `type ${3 - text.length} more character`;
            this.setState((prevState) => ({
                    ...prevState,
                    textInputHint: newHint,
                    checkInput: true,
                    searchList: newList,
                }));
        }

        if (text.length >= 3) {
            newHint = 'searching';
            const response = fetch(userId, text);
            this.setState((prevState) => ({
                ...prevState,
                loading: true,
            }));
            response.then((response) => {
                if (response.statusText === "OK") {
                    let newSearchList = [];
                    if(localList){
                        newSearchList = SearchSelectsRemote(newList, text.toUpperCase(), response.data);
                    }
                    else{
                        newSearchList = response.data;
                    }
                    let foundNewUser = false;
                    if (newSearchList.length >= 1) {
                        foundNewUser = true;
                        this.setState((prevState) => ({
                                ...prevState,
                                checkInput: !foundNewUser,
                                searchList: newSearchList,
                                textInputHint: newHint,
                                loading: false,
                            }));
                    }
                } 
            }).catch((error)=>{
                this.setState((prevState) => ({
                    ...prevState,
                    loading: false,
                    checkInput: true,
                    textInputHint: 'No result found',
                }));

                throw error;
            });
        }
    }

    render() {
      const { error, loading, checkInput, textInputHint, searchList } = this.state;

      return (
        <Component
          {...this.props}
          error={error}
          searchList = {searchList}
          textInputHint = {textInputHint}
          checkInput = {checkInput}
          loading={loading}
          search={this.search}
          handleSelect = {this.handleSelect}
          handleRemove = {this.handleRemove}
        />
      );
    }
  }

  return Wrapper;
};

export default withSearch;
