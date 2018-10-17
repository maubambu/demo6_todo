import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

const TodoList = (props) => {
    // console.log(props.list)
    const list = props.list.map(item => {
        return (   
            <li key={item.id}>
                <Checkbox onChange={(e)=>props.change(e, item.id)} checked={item.done}></Checkbox>
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

export default TodoList;