import React from 'react';
import Button from '@material-ui/core/Button';
import './Footer.scss';

const Footer = (props) => {
    return (
        <div className="footer-container">
            <p>Faltan {props.missing} tareas</p>
            <div>
                <Button onClick={() => props.filterChange("all")} variant="outlined">Todos</Button>
                <Button onClick={() => props.filterChange("done")} variant="outlined">Completados</Button>
                <Button onClick={() => props.filterChange("pending")} variant="outlined">Pendientes</Button>
            </div>
        </div>
    )
}

export default Footer;