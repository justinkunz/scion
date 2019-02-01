import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import SweetAlert from 'sweetalert2-react';
import Navbar from '../misc/Navbar'
import axios from 'axios';


class LoginForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = { username: '', password: '', show: false, title: '', text: '' }
    }

    signUserIn = async () => {
        const request = await axios.post('/api/signIn', this.state)
        console.log(request.data)
        if (request.data.message === "success") {
            this.props.signInUser(request.data.token)
        }
        else {
            this.setState({ title: "Uh oh!", text: "Your email address and/or password was incorrect!", show: true })
        }

    }

    render() {


        return (
            <div className='login-form logInForm'>
                <Navbar activePage="signIn" />

                <style>{`
                 body > div,
                 body > div > div,
                 body > div > div > div.login-form {
                 height: 100%;
                 }
    `}</style>
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='teal' textAlign='center'>
                            Log in to your account
                        </Header>
                        <Form size='large'>
                            <Segment stacked>
                                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' onChange={(e) => this.setState({ username: e.target.value })} />
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    onChange={(e) => this.setState({ password: e.target.value })}
                                />

                                <Button onClick={() => this.signUserIn()} color='teal' fluid size='large'>
                                    Login
                                </Button>
                                <SweetAlert
                                    show={this.state.show}
                                    title={this.state.title}
                                    text={this.state.text}
                                    onConfirm={() => this.setState({ show: false })}
                                />
                            </Segment>
                        </Form>
                        <Message>
                            New to us? <a href='/sign_up'>Sign Up</a>
                        </Message>
                    </Grid.Column>
                </Grid>

            </div>
        )
    }
}

export default LoginForm