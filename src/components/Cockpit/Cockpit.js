import React, { useEffect, useRef } from 'react';

import AuthContext from '../../context/auth-context';
import classes from './Cockpit.css';

const cockpit = props => {
	//const toggleBtnRef = React.createRef(); - without "import React, { useRef } from 'react';"
	const toggleBtnRef = useRef(null); // with "import..."
	
	useEffect(() =>  {
		console.log('[Cockpit.js] useEffect');
		//http request...
		// setTimeout(() => {
			// 	alert('save data to the cloud!');
			// }, 1000);
		toggleBtnRef.current.click();
		return () => {
			console.log('[Cockpit.js] cleanup work in useEffect');
		};
	}, []); //alert will apear when second argument '[]' will change
	
	useEffect(() => {
		console.log('[Cockpit.js] 2nd useEffect');
		return () => {
			console.log('[Cockpit.js] cleaup work in 2nd useEffect');
		}
	});

	const assignedClasses = [];
	if ( props.personsLength <= 2 ) {
		assignedClasses.push( classes.red ); // classes = ['red']
	}
	if ( props.personsLength <= 1 ) {
		assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
	}

	let btnClass = '';
	if (props.showPersons) {
			btnClass = classes.Red;
	}

	return (
		<div className={classes.Cockpit}>
			<h1>{props.title}</h1>
			<p className={assignedClasses.join( ' ' )}>This is really working!</p>
			<button
				ref={toggleBtnRef}
				className={btnClass}
				onClick={props.clicked}>
				Toggle Persons
			</button>
			<AuthContext.Consumer>
			{(context) => <button onClick={context.login}>Log in</button>}
			</AuthContext.Consumer>
		</div>
	);
};

export default React.memo(cockpit); //React.memo() do a snapshot of Cockpit copmponent and render it only when the component was updated