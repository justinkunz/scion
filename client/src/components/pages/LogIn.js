import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import Navbar from '../misc/Navbar'
import axios from 'axios';

class LoginForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = { username: '', password: '' }
    }

    render() {
        const signUserIn = () => {
            axios.post('/api/new/user', this.state)
        }
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

                                <Button onClick={() => signUserIn()} color='teal' fluid size='large'>
                                    Login
            </Button>
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