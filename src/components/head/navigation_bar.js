import React from 'react';

const NavigationBar = (props) => {
    return <nav className="navbar navbar-default visible-xs">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">
                        <p className="logo-title">Marvelous!</p>
                    </a>
                    <div className="options pull-right">
                        <span 
                            className="glyphicon glyphicon-option-vertical" 
                            onClick={props.toggle}
                        ></span>
                    </div>
                </div>
            </div>
        </nav>
}

export default NavigationBar;
