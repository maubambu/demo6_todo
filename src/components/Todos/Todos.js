import React, {Component} from 'react';
import { Card, InputBase, IconButton, Icon } from '@material-ui/core';
import './Todos.scss';
import Title from './Title/Title';
import TodoList from './TodoList/TodoList';
import Footer from './Footer/Footer';

export default class Todos extends Component{
    constructor() {
        super();
        this.state = {
            list: [
                {
                    id: 1,
                    text: "Comprar manteconchas",
                    done: false
                },
                {
                    id: 2,
                    text: "Ir al gym",
                    done: false
                }
            ],
            todoInput: "",
            selectedFilter: "all"
        }
    }

    handleInputChange = (e) => {
        this.setState({ todoInput: e.target.value });
    }

    handleAddTodo = () => {
        this.setState({
            list: this.state.list.concat(
                {
                    id: this.state.list.length + 1,
                    text: this.state.todoInput,
                    done: false
                }
            ),
            todoInput: ""
        });
    }

    handleDoneChange = (e, id) => {
        const arregloTemporal = this.state.list;
        for (let i in arregloTemporal) {
            if (arregloTemporal[i].id == id) {
                arregloTemporal[i].done = e.target.checked;
            }
        }
        this.setState({ list: arregloTemporal });
    }

    handleFilterChange = (filter) => {
        this.setState({ selectedFilter: filter });
    }

    render() {
        let faltan = this.state.list.filter(item => !item.done).length;
        let filteredList = [];
        switch (this.state.selectedFilter) {
            case "done":
                // Filtrado de done
                filteredList = this.state.list.filter(item => item.done)
                break;
            case "pending":
                // Filtrado de los que no esten finalizados
                filteredList = this.state.list.filter(item => !item.done)
                break;
            default:
                // Filtrado == copia de todos
                filteredList = this.state.list;
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
                    <TodoList change={this.handleDoneChange} list={filteredList} />
                    <Footer filterChange={this.handleFilterChange} missing={faltan}/>
                </Card>
            </div>
        )
    }
}