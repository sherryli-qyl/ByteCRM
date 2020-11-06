import React from 'react';
import TaskCards from './components/TaskCards';
import TaskPageHeader from './components/Header';
import shuffleCards from '../../../services/shuffleCards';
import store from '../../../../store';
import './TaskPage.scss';
import {
  GetTasks, GetMultiContactsTasks, UpdateTask, DeleteCreateTask, UpdateAssignedToUser, RemoveAssignedToUser,
} from '../../../Api/Task/Task';

const currentUser = JSON.parse(localStorage.getItem('user'));

class TaskPage extends React.Component {
  constructor(props) {
    super(props);
    const { contact, relatedTo, associatedContacts } = this.props;
    this.state = {
      currentUser,
      cardList: [],
      cardsArray: [],
      reload: true,
      relatedTo,
      contact,
      associatedContacts,
    };
    this.onChangeText = this.onChangeText.bind(this);
    this.onChangeTask = this.onChangeTask.bind(this);
    this.handleCreateTask = this.handleCreateTask.bind(this);
    this.handleDeleteCard = this.handleDeleteCard.bind(this);
    this.handleAddUser = this.handleAddUser.bind(this);
    this.handleRemoveUser = this.handleRemoveUser.bind(this);
  }

  sortCardsArray(data) {
    const newCardsArray = shuffleCards(data);
    this.setState({
      cardsArray: newCardsArray,
    });
  }

  onChangeText(newContent, cardKey) {
    const newCardsList = this.state.cardList;
    for (const i in newCardsList) {
      if (newCardsList[i].key === cardKey) {
        newCardsList[i].description = newContent;
        this.setState({
          cardsList: newCardsList,
        });
      }
    }
  }

  onChangeTask(taskId, body) {
    UpdateTask(taskId, body);
  }

  handleInitPage() {
    let data = [];
    const { contact, associatedContacts, relatedTo } = this.state;
    if (contact) {
      data = GetTasks(contact.id);
    } else if (associatedContacts) {
      let ids = `${relatedTo}&&`;
      for (let i = 0; i < associatedContacts.length; i++) {
        const { id } = associatedContacts[i];
        i === 0 ? ids += id : ids += `&&${id}`;
      }
      data = GetMultiContactsTasks(ids);
    }
    data.then((response) => {
      if (response.statusText === 'OK') {
        this.setState({
          cardList: response.data,
        });
      }
      return this.state.cardList;
    }).then((cards) => {
      if (cards.length >= 1) {
        this.sortCardsArray(cards);
      }
    });
  }

  handleCreateTask(task) {
    const newCardList = this.state.cardList;
    newCardList.push(task);
    this.setState({
      cardList: newCardList,
    });
    this.sortCardsArray(newCardList);
  }

  handleDeleteCard(id) {
    const response = DeleteCreateTask(id);
    response.then((value) => {
      if (value) {
        this.handleInitPage();
      }
    });
  }

  handleAddUser(userId, taskId) {
    UpdateAssignedToUser(userId, taskId);
  }

  handleRemoveUser(userId, taskId) {
    RemoveAssignedToUser(userId, taskId);
  }

  componentDidMount() {
    store.subscribe(() => {
      const { reload, value } = store.getState().reload;
      if (reload) {
        this.handleCreateTask(value);
      }
    });
    if (this.state.reload) {
      this.handleInitPage();
    }
  }

  render() {
    const { cardsArray, contact, currentUser } = this.state;
    return (
      <div className="taskPage">
        <TaskPageHeader
          handleCreateTask={this.handleCreateTask}
        />
        <TaskCards
          contact={contact}
          currentUser={currentUser}
          cardsArray={cardsArray}
          handleDeleteCard={this.handleDeleteCard}
          handleAddUser={this.handleAddUser}
          handleRemoveUser={this.handleRemoveUser}
          onChangeTask={this.onChangeTask}
        />
      </div>
    );
  }
}

export default TaskPage;
