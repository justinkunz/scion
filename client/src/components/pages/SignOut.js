import React from 'react';
import { Redirect } from 'react-router-dom';

class SignOut extends React.Component {
    constructor(props) {
        super(props)
        this.props.signOutUser()
    };
    render() {
        return <Redirect to="/" />
    };
};

export default SignOut;