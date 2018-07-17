/* eslint-disable wpcalypso/import-docblock */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MyComponent extends Component {
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

    everythingElse() {
    	return true;
    }

    render() {
    	return (
	        <div>{this.props.example}</div>
    	);
    }
}
