/* eslint-disable no-mixed-spaces-and-tabs, wpcalypso/import-docblock */
import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default class ClassComponent extends Component {
    static propTypes = {
    	example: PropTypes.any,
    }

    static defaultProps = {
    	example: '',
    }

    constructor( props ) {
    	super( props );
    }

    instanceVariable = true

    instanceMethod = () => {
    	return true;
    }

    get getter() {
    	return true;
    }

    set setter( state ) {
    	this.setState( state );
    }

    everythingElse() {
    	return true;
    }

    renderCool() {
    	return 'cool';
    }

    render() {
    	return (
	        <div>{this.props.example}</div>
    	);
    }
}

export function FunctionalComponent() {
	const [ count, setCount ] = useState( 1 );

	useEffect( () => {
		document.title = count;
	} );

	const handleClick = () => setCount( count + 1 );

	return (
		<button onClick={ handleClick }>Increment</button>
	);
}
