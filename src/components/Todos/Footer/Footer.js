import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import './Footer.scss';
import { connect } from 'react-redux';
import { SelectFilter } from '../../../state/actions/FilterActions';

class Footer extends Component {

    handleFilterChange = (filter)=> {
        this.props.selectFilter(filter);
    }

    render() {
        return (
            <div className="footer-container">
                <p>Faltan {this.props.missing} tareas</p>
                <div>
                    <Button onClick={()=>this.handleFilterChange("all")} variant="outlined">Todos</Button>
                    <Button onClick={()=>this.handleFilterChange("done")} variant="outlined">Completados</Button>
                    <Button onClick={()=>this.handleFilterChange("pending")} variant="outlined">Pendientes</Button>
                </div>
            </div>
        )
    }
}



const mapDispatchToProps = {
    selectFilter: SelectFilter
}

export default connect(null, mapDispatchToProps)(Footer);