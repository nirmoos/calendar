import React from 'react';
import '../Stylesheets/Indicator.css';

class Indicator extends React.Component {
    constructor ( props ) {
        super ( props );
        this.state = {
            totalLength: 0,
            flag: false,
            operation: '',
        }
    }
    componentWillReceiveProps ( nextProps ) {
        if ( this.state.totalLength < nextProps.totalLength ) {
            this.setState ( {
                totalLength: nextProps.totalLength,
                flag: true,
                operation: 'ADDED',
            } );
        }
        else if ( this.state.totalLength > nextProps.totalLength ) {
            this.setState ( {
                totalLength: nextProps.totalLength,
                flag: true,
                operation: 'DELETED',
            } );
        }
    }
    componentDidUpdate () {
        this.timeout = setTimeout( () => {
            this.setState( {
                flag: false,
            } );
        }, 1000 );
    }
    componentWillUpdate () {
        if ( this.timeout !== undefined )
            clearInterval(this.timeout);
    }
    render () {
        let message = '';
        switch ( this.state.operation ) {
            case 'ADDED':
                message = 'REMINDER ADDED SUCCESFULLY';
                break;
            case 'DELETED':
                message = 'REMINDER DELETED SUCCESFULLY';
                break;
            default:

        }
        return (
            <div>
            { this.state.flag ? (
                <div className='indicator-status'>
                    <span>{ message }</span>
                </div>
            ) : null }
            </div>
        );
    }
}

export default Indicator;
