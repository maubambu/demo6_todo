import React, {Component} from 'react';
import { Card, InputBase, IconButton, Icon } from '@material-ui/core';
import './Todos.scss';
import Title from './Title/Title';
import TodoList from './TodoList/TodoList';
import Footer from './Footer/Footer';
import { connect } from 'react-redux';
import { AddTodo } from './../../state/actions/TodosActions';

class Todos extends Component{

    state = {
        selectedFilter: "",
        todoInput: ""
    }

    handleInputChange = (e) => {
        this.setState({ todoInput: e.target.value });
    }

    handleAddTodo = () => {
        this.props.addTodo(this.state.todoInput);
    }


    handleFilterChange = (filter) => {
        this.setState({ selectedFilter: filter });
    }

    render() {
        let faltan = this.props.list.filter(item => !item.done).length;
        let filteredList = [];
        switch (this.state.selectedFilter) {
            case "done":
                // Filtrado de done
                filteredList = this.props.list.filter(item => item.done)
                break;
            case "pending":
                // Filtrado de los que no esten finalizados
                filteredList = this.props.list.filter(item => !item.done)
                break;
            default:
                // Filtrado == copia de todos
                filteredList = this.props.list;
        }

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
                    <TodoList change={this.handleDoneChange} />
                    <Footer filterChange={this.handleFilterChange} missing={faltan}/>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.todos
    }
}

const mapDispatchToProps = {
    addTodo: AddTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);