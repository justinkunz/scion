import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import SweetAlert from 'sweetalert2-react';
import Navbar from '../misc/Navbar';

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = { show: false }
    }
    render() {

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
                                            <input type="text" placeholder="First Name" />
                                        </div>
                                        <div className="field">
                                            <label>Last name</label>
                                            <input type="text" placeholder="Last Name" />
                                        </div>
                                    </div>
                                    <div className="fields">
                                        <div className="field">
                                            <label>Email Address</label>
                                            <input type="text" placeholder="example@mail.com" />
                                        </div>
                                        <div className="field">
                                            <label>Phone Number</label>
                                            <input type="text" placeholder="(123) 456 7890" />
                                        </div>
                                    </div>
                                    <div className="fields">
                                        <div className="field">
                                            <label>Choose A Password</label>
                                            <input type="password" placeholder="Password" />
                                        </div>
                                        <div className="field">
                                            <label>Confirm Password</label>
                                            <input type="password" placeholder="Confirm Password" />
                                        </div>
                                    </div>
                                </div>

                                <Button onClick={() => this.setState({ show: true })} color='teal' fluid size='large'>
                                    Sign Up
                                 </Button>
                                <SweetAlert
                                    show={this.state.show}
                                    title="Success!"
                                    text="Your account has been created"
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