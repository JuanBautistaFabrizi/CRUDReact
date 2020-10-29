import React, { Component } from 'react';
import styles from './Task.module.css';

class Task extends Component {
    state = { done: this.props.task.completed };

    handleClick = () => {
        this.setState({ done: !this.state.done });
    }

    handleDelete = () => {
        const { onDelete, task } = this.props;
        onDelete(task.id);
    }

    render() {
        const { task } = this.props;
        return (
            <li onClick={this.handleClick} className={this.state.done ? styles.completed : styles.task}>
                <div className={styles.label}>
                    {task.title}
                    {this.state.done && <button className={styles.button} onClick={this.handleDelete}>X</button>}
                </div>

            </li>
        );
    }
}

export default Task;