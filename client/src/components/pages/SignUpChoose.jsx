import React from 'react';
import { EitherOr } from '../form';
import Navbar from '../misc/Navbar';
import { Redirect } from 'react-router-dom';

class SignUpChoose extends React.Component {
    constructor(props) {
        super(props)
        this.state = { redirectLink: null }
    }
    onValueChange = (fieldId, choosen) => {
        if (choosen === "I am a Gestational Carrier") {
            this.setState({ redirectLink: "/sign_up/gc" })
        } else {
            this.setState({ redirectLink: "/sign_up/ip" })
        }
    }
    render() {
        if (this.state.redirectLink) {
            return <Redirect to={this.state.redirectLink} />
        }
        return (
            <div>
                <Navbar activePage="signUp" />
                <div style={{ marginTop: "30vh" }} />
                <EitherOr
                    fieldId="GC_IP"
                    onValueChange={this.onValueChange}
                    question="Are you a Gestational Carrier or an Intended Parent?"
                    btn1="I am a Gestational Carrier"
                    btn2="I am an Intended Parent"
                />
            </div>
        );
    };
};

export default SignUpChoose;