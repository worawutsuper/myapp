import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'todomvc-app-css/index.css'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    const initialTodos = [
      {id: 1, text: 'Go buy shoes', completed: false},
      {id: 2, text: 'Walk the dog', completed: true},
      {id: 3, text: 'Go fitness', completed: false},
    ];
    super(props, initialTodos);
    this.state = {
      filter: 'all',
      todos: initialTodos,
      flagId: initialTodos.length
    }
  }

  onDelete = (index) => {
    let newflagId = this.state.flagId + 1;
    let currentTodos = this.state.todos;
    // delete currentTodos[index - 1];
    this.setState({
      todos: currentTodos.filter(todo => todo.id !== index),
      flagId: newflagId
    });
  }

  addTodo = (todoText) => {
    const newFlagId = this.state.flagId + 1;
    const currentTodos = this.state.todos;
    currentTodos.push({id: newFlagId, text: todoText, completed: false});
    this.setState({
      todos: currentTodos,
      flagId: newFlagId
    });
  }

  toggleComplete = (id, completed) => {
    const currentTodos = this.state.todos;
    this.setState({
      todos: currentTodos.map(todo => {
        return todo.id === id ? {...todo, completed} : todo
        // or
        // if(todo.id === id) {
        //   todo.complete = completed;
        // }
        // return todo
      })
      // or
      // todos: currentTodos.map(todo => { return todo.id === id ? {...todo, completed} : todo })
      // {...todo, completed} is equal to {...todo, complete: completed}
    });
  }

  countActiveItem = () => {
    let itemLeft = 0;
    this.state.todos.forEach((todo) => {
      itemLeft = todo.completed === false ? itemLeft + 1 : itemLeft;
    });
    return itemLeft;
  }

  changeCurrentFilter = (filterType) => {
    let newFilter = '';
    switch(filterType) {
      case 'all' : newFilter = 'all'; break;
      case 'active' : newFilter = 'active'; break;
      case 'completed' : newFilter = 'completed'; break;
      default:
    }
    this.setState({
      filter: newFilter
    });
  }

  render() {
    return (
      <div className="todoapp">
        <Header onSubmit={this.addTodo}/>
        <Main filter={this.state.filter} todos={this.state.todos} onDelete={this.onDelete} onToggleComplete={this.toggleComplete}/>
        <Footer filter={this.state.filter} changeCurrentFilter={this.changeCurrentFilter} countActiveItem={this.countActiveItem}/>
      </div>
    );
  }
}

export default App;