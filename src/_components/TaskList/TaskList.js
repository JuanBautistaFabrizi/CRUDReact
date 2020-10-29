import React, {Component, Fragment} from 'react';
import {getTasks} from '../../services/tasks';
import Loader from '../Loader/Loader';
import {Task} from '../Task';
import './TaskList.css'

class TaskList extends Component {
    state = { tasks: [], newTaskDesc: '', loading: true };

    async componentDidMount() {
        let response = await getTasks();
        if(response.status) {
            this.setState({ tasks: response.data, newTaskDesc: '' });
        }
        this.setState({ loading: false });
    }

    // componentWillUnmount() {
    //     document.getElementById('asasda').removeEventListener('click');
    // }

    handleDelete = (id) => {
        const tasks = this.state.tasks.filter(task => task.id !== id);
        this.setState({ tasks });
    };

    handleCreate = () => {
        const newTask = {
            id: this.state.tasks.length + 2,
            title: this.state.newTaskDesc,
            createdAt: new Date().toISOString()
        }

        const tasks = [newTask, ...this.state.tasks];
        this.setState({ tasks, newTaskDesc: '' });
    }

    handleDescChange = (e) => {
        this.setState({ newTaskDesc: e.target.value});
    }

    render() {
        const { tasks, loading, newTaskDesc } = this.state;
        const {header } = this.props;
        return (
            <Fragment>
                <h1>{header}</h1>
                <div>
                    <input type="text"
                        placeholder="Descripcion de la tarea"
                        onChange={this.handleDescChange}
                        value={newTaskDesc}>
                    </input>
                    <button className="button" onClick={this.handleCreate} disabled={!newTaskDesc}>Agregar</button>
                </div>
                {loading && <Loader></Loader>}
                <ul className="list">
                    {tasks.map(task =>
                        <Task task={task} onDelete={this.handleDelete} key={task.id}/>
                    )}
                </ul>
            </Fragment>
        );
    }

}

export default TaskList;