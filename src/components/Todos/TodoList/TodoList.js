import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from 'react-redux';
import {toggleTodo} from './../../../state/actions/TodosActions'
class TodoList extends Component {
    state = {};
    
    render() {
        let filteredList = this.props.list;

        switch (this.props.selectedFilter) {
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

        const list = filteredList.map(item => {
            return (
                <li key={item.id}>
                    <Checkbox onChange={() => this.props.toggleTodo(item.id)} checked={item.done}></Checkbox>
                    <span>{item.text}</span>
                </li>
            )
        })
        return (
            <ul className="todos-list">
                {list}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.todos.list,
        selectedFilter: state.filter.selectedFilter
    };
}

const mapDispatchToProps = {
    toggleTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);