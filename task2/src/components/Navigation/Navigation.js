import React from 'react';
import Button from '@material-ui/core/Button';
import './Navbar.css';

const Navigation = ({onButtonSubmit}) => {

            return(
                <nav className='navbar'>
                    <h3 className="logo">My Users</h3>
                    <div className='nav-links'>
                        <Button  variant="outlined" onClick={onButtonSubmit} color="inherit">
                            Get Users
                        </Button>
                    </div>
                </nav>
            );
        }

//{onRouteChange, isSignedIn}
export default Navigation;
