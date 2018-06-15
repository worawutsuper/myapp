import React, { Component } from 'react';

class TodoItem extends Component {
    handleToggleItem = (e) => {
        const { id, completed, onToggleItem } = this.props;
        // equal to
        // const id = this.props.id;
        // const completed = this.props.completed;
        // const onToggleItem = this.props.onToggleItem
        onToggleItem(id, !completed);
    }

    handleDelete = () => {
        this.props.onDelete(this.props.id);
    }

    render() {
        let classname = this.props.completed ? 'completed' : '';
        return (
            <li className={classname}>
                <div className="view">
                    <input
                        type="checkbox"
                        className="toggle"
                        checked={this.props.completed}
                        onChange={this.handleToggleItem}
                    />
                    <label>{this.props.text}</label>
                    <button
                        onClick={this.handleDelete} 
                        type="button"
                        className="destroy"
                    />
                </div>
            </li>
        );
    }
}

export default TodoItem;