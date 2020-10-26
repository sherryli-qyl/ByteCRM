import React from 'react';
import TaskCards from './components/TaskCards';
import TaskPageHeader from './components/Header';
import shuffleCards from '../../../services/shuffleCards';
import "./TaskPage.scss";
import {GetTasks, UpdateTask, DeleteCreateTask, UpdateAssignedToUser, RemoveAssignedToUser} from '../../../Api/Task/Task';

const user = JSON.parse(localStorage.getItem('user'));
//const getRelatedTo = JSON.parse(localStorage.getItem('getRelatedTo'));

class TaskPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user,
			cardList: [],
			cardsArray: [],
			getRelatedTo: this.props.getRelatedTo,
		}
		this.onChangeText = this.onChangeText.bind(this);
		this.onChangeTask = this.onChangeTask.bind(this);
		this.handleCreateTask = this.handleCreateTask.bind(this);
		this.handleDeleteCard = this.handleDeleteCard.bind(this);
		this.handleAddUser = this.handleAddUser.bind(this);
		this.handleRemoveUser = this.handleRemoveUser.bind(this);
	}

	sortCardsArray() {
		const newCardsArray = shuffleCards(this.taskCardsList);
		this.setState({
			cardsArray: newCardsArray
		})
	}

	onChangeText(newContent, cardKey) {
		const newCardsList = this.state.cardList;
		for (let i in newCardsList) {
				if (newCardsList[i].key === cardKey) {
						newCardsList[i].description = newContent;
						this.setState({
								cardsList: newCardsList,
						})
				}
		}
	}

	onChangeTask(taskId, body) {
		UpdateTask(taskId, body);
	}

	handleInitPage(){
		const tasks = GetTasks(this.props.getRelatedTo);
	 tasks.then(value => {
				this.setState({
						cardList: value,
				});
				return this.state.cardList
		}).then(data => {
				if (data.length >= 1) {
						this.sortCardsArray();
				}
		});
	}


	handleCreateTask(task){
		const newCardList = this.state.cardList;
		newCardList.push(task);
		this.setState({
				cardList:newCardList,
		})
		this.sortCardsArray()
	}

	handleDeleteCard(id){
		const response = DeleteCreateTask(id);
		response.then(value =>{
				if (value){
				this.handleInitPage();
				}
		})
	}

	handleAddUser(userId, taskId){
		UpdateAssignedToUser(userId, taskId);
	}

	handleRemoveUser(userId, taskId){
		RemoveAssignedToUser(userId, taskId);
	}

	componentDidMount() {
		
		this.handleInitPage();
	}

	render() {
		const { cardsArray, getRelatedTo, user} = this.state;
		return (
		<div className="taskPage">
					<TaskPageHeader handleCreateTask = {this.handleCreateTask}
					                user={user}
													getRelatedTo={getRelatedTo} />
					<TaskCards
						getRelatedTo={getRelatedTo}
						user={user}
						cardsArray={cardsArray}
						handleDeleteCard = {this.handleDeleteCard}
						handleAddUser={this.handleAddUser}
						handleRemoveUser={this.handleRemoveUser} 
						onChangeTask={this.onChangeTask} />
					</div>
		)
	}
}

export default TaskPage;