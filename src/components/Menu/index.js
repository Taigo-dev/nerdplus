import React from 'react';
import { Link } from 'react-router-dom';
// import Logo from '../../assets/img/Logo.png';
import './styles.css';
import Button from '../Button';

function Menu(){
    return(
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src="https://fontmeme.com/permalink/200729/4bc06f9d776f51af41d80d72f8d0ea71.png" alt="netflix-font" border="0" />
            </Link>
            <Button as={Link} className="ButtonLink" to="/">
                Novo vídeo
            </ Button>
        </nav>
    );
}
export default Menu;
