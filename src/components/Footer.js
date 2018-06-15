import React, { Component } from 'react';
import '../App.css';

class Footer extends Component {
    render() {
        let filter = {
            all: '',
            active: '',
            completed: ''
        };
        switch(this.props.filter) {
            case 'all' : filter.all = 'selected'; break;
            case 'active' : filter.active = 'selected'; break;
            case 'completed' : filter.completed = 'selected'; break;
            default: 
        }

        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong>{this.props.countActiveItem()}</strong> <span>item left</span>
                </span>
                <ul className="filters">
                    {/* {this.props.changeCurrentFilter.bind(this, 'all')} is equal to {() => this.props.changeCurrentFilter('all')}*/}
                    <li><a className={filter.all} onClick={this.props.changeCurrentFilter.bind(this, 'all')}>All</a></li>
                    <li><a className={filter.active} onClick={this.props.changeCurrentFilter.bind(this, 'active')}>Active</a></li>
                    <li><a className={filter.completed} onClick={this.props.changeCurrentFilter.bind(this, 'completed')}>Completed</a></li>
                </ul>
            </footer>
        );
    }
}

export default Footer;