import { Menubar } from 'primereact/menubar';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const StyledMenubar = styled(Menubar)`
    border: none;
    border-radius: 0%;
`;

const Header = () => {
    const items = [
        {
            label: 'Home',
            template: () => <NavLink to="/home" className="p-menuitem-link">Home</NavLink>
        },
        {
            label: 'Contact',
            template: () => <NavLink to="/contact" className="p-menuitem-link">Contact</NavLink>
        },
        {
            label: 'About',
            template: () => <NavLink to="/about" className="p-menuitem-link">About</NavLink>
        }
    ];

    const start = <h2 style={{ marginLeft: '1rem' }}>Website Header</h2>;

    return (
        <StyledMenubar model={items} start={start} />
    );
};

export default Header;
