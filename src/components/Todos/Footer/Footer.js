import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './Footer.scss';
import { connect } from 'react-redux';
import { changeFilter } from './../../../state/actions/FilterActions';

class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <p>Faltan {this.props.missing} tareas</p>
                <div>
                    <Button onClick={() => this.props.changeFilter("all")} variant="outlined">Todos</Button>
                    <Button onClick={() => this.props.changeFilter("done")} variant="outlined">Completados</Button>
                    <Button onClick={() => this.props.changeFilter("pending")} variant="outlined">Pendientes</Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = () => {
    return {};
}

const mapDispatchToProps = {
    changeFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);