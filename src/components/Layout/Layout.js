import React from 'react';
import classes from './Layout.module.css';

function Layout(props) {
  return (
  	<div>
	    <div className={classes.layoutWrapper}>
	    	<h1 className={classes.logo}>TimeCatcher</h1>
	    	<span className={classes.logIn}>LogIn</span>
	    	<span className={classes.signUp}>SignUp</span>
	    </div>
    	{props.children}
    </div>	
  );
}

export default Layout;
