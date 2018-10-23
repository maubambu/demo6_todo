import React, {Component} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from 'react-redux';
import { CheckTodo } from './../../../state/actions/TodosActions';

class TodoList extends Component {

    handleDoneChange = (e, id) => {
        this.props.checkTodo(id, e.target.checked);
    }

    render() {
        const list = this.props.list.map(item => {
            return (
                <li key={item.id}>
                    <Checkbox onChange={(e) => this.handleDoneChange(e, item.id)} checked={item.done}></Checkbox>
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
        list: state.todos.list
    }
}

const mapDispatchToProps = {
    checkTodo: CheckTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);