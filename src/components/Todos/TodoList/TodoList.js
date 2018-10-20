import React, {Component} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from 'react-redux';

class TodoList extends Component {

    handleDoneChange = (e, id) => {
        this.props.dispatch({ type: "CHECK_TODO", id: id, checked: e.target.checked });
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
        list: state.todosReducer.list
    }
}


export default connect(mapStateToProps)(TodoList);