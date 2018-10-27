import React, {Component} from 'react';
import { Card, InputBase, IconButton, Icon } from '@material-ui/core';
import './Todos.scss';
import Title from './Title/Title';
import TodoList from './TodoList/TodoList';
import Footer from './Footer/Footer';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from './../../state/actions/TodosActions';

class Todos extends Component{
    state = {
        todoInput: ""
    }

    handleInputChange = (e) => {
        this.setState({ todoInput: e.target.value });
    }

    handleAddTodo = () => {
        this.props.addTodo(this.state.todoInput);
        this.setState({ todoInput: "" });
    }

    render() {
        let faltan = this.props.list.filter(item => !item.done).length;
        return (
            <div className="todos-container">
                <Title text="Tareas"/>
                <Card className="todos-card">
                    <div className="input-container">
                        <IconButton>
                            <Icon>
                                keyboard_arrow_down
                            </Icon>
                        </IconButton>
                        <InputBase value={this.state.todoInput} onChange={(e)=>this.handleInputChange(e)} placeholder="Escribe una tarea" className="input" type="text" />
                        <IconButton onClick={this.handleAddTodo}>
                            <Icon>
                                add
                            </Icon>
                        </IconButton>
                    </div>
                    <TodoList />
                    <Footer missing={faltan}/>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.todos.list,
        selectedFilter: state.filter.selectedFilter
    }
}

const mapDispatchToProps = {
    addTodo, toggleTodo
}


export default connect(mapStateToProps, mapDispatchToProps)(Todos);