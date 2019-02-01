import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import SweetAlert from 'sweetalert2-react';
import Navbar from '../misc/Navbar';
import axios from 'axios';
import { Redirect } from 'react-router-dom';


class SignIn extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = {
            show: false,
            text: '',
            title: '',
            GC_IP: '',
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            confirm_pw: '',
            phone_num: '',
            type: this.props.type,
            acctCreated: false
        }
    }
    onLoginClick = () => {
        console.log(this.state)
        if (this.state.first_name === '' || this.state.last_name === '' || this.state.email === '' || this.state.phone_num === '' || this.state.confirm_pw === '' || this.state.password === '') {
            this.setState({
                title: "Yikes!",
                text: "Please fill out all fields!",
                show: true
            });
            return
        }
        if (this.state.confirm_pw !== this.state.password) {
            this.setState({
                title: "Uh oh!",
                text: "Passwords do not match!",
                show: true
            });
            return
        }

        axios.post('/api/new/user', this.state).then(data => {
            if (data.status === 200) {
                this.setState({
                    title: "Success!",
                    text: "Account Successfully Created",
                    show: true,
                })
                this.setState({ acctCreated: true })

            }
            else {
                this.setState({
                    title: "Uh oh!",
                    text: "An error occured when creating your account",
                    show: true
                })
            }
        })
    }

    render() {
        if (this.state.acctCreated === true) {
            return <Redirect to="/sign_in" />
        }
        return (
            <div className="login-form logInForm" >
                <Navbar activePage="signUp" />


                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>

                    <Grid.Column style={{ maxWidth: 450 }}>

                        <Header as='h2' color='teal' textAlign='center'>
                            Sign up for a new account
                             </Header>
                        <Form size='large'>

                            <Segment stacked>
                                <div className="ui form">

                                    <div className="fields">
                                        <div className="field">
                                            <label>First name</label>
                                            <input value={this.state.first_name} type="text" placeholder="First Name" onChange={(e) => this.setState({ first_name: e.target.value })} />
                                        </div>
                                        <div className="field">
                                            <label>Last name</label>
                                            <input value={this.state.last_name} type="text" placeholder="Last Name" onChange={(e) => this.setState({ last_name: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="fields">
                                        <div className="field">
                                            <label>Email Address</label>
                                            <input value={this.state.email} type="text" placeholder="example@mail.com" onChange={(e) => this.setState({ email: e.target.value })} />
                                        </div>
                                        <div className="field">
                                            <label>Phone Number</label>
                                            <input value={this.state.phone_num} type="text" placeholder="(123) 456 7890" onChange={(e) => this.setState({ phone_num: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="fields">
                                        <div className="field">
                                            <label>Choose A Password</label>
                                            <input value={this.state.password} type="password" placeholder="Password" onChange={(e) => this.setState({ password: e.target.value })} />
                                        </div>
                                        <div className="field">
                                            <label>Confirm Password</label>
                                            <input value={this.state.confirm_pw} type="password" placeholder="Confirm Password" onChange={(e) => this.setState({ confirm_pw: e.target.value })} />
                                        </div>
                                    </div>
                                </div>

                                <Button onClick={() => this.onLoginClick()} color='teal' fluid size='large'>
                                    Sign Up
                                 </Button>
                                <SweetAlert
                                    show={this.state.show}
                                    title={this.state.title}
                                    text={this.state.text}
                                    onConfirm={() => this.setState({ show: false })}
                                />
                            </Segment>
                        </Form>

                    </Grid.Column>
                </Grid>
            </div>
        );
    };
};

export default SignIn;