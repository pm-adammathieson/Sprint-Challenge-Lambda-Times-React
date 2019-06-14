import React, { Component } from 'react'
import TopBar from './TopBar'
import { thisExpression } from '@babel/types';

export default class SignUpIn extends Component {
    constructor() {
        super()
        this.state = {
            signedUp: false,
            toggleLogin: false,
            loggedIn: false,
            username: '',
            password: ''
        }
    }

    
handleChange = e => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

toggleLogin = () => {
    this.setState({
        toggleLogin: !this.state.toggleLogin
    })
}

signUp = (e) => {
    e.preventDefault()
    localStorage.setItem('username', this.state.username)
    localStorage.setItem('password', this.state.password)
    this.setState({
        signedUp: true,
        username: '',
        password: ''
    })
}

signOut = (e) => {
    e.preventDefault()
    this.setState({
        loggedIn: false
    })
}

logIn = e => {
    e.preventDefault()
    if (this.state.password === localStorage.getItem('password') && this.state.username === localStorage.getItem('username')) {
        this.setState({
            loggedIn: true,
            username: '',
            password: ''
        })
    }
}


  render() {
      console.log(localStorage.getItem('username'))
    if (this.state.toggleLogin) {
    return (
        <div className="login">
            <form onSubmit={(this.state.signedUp ? this.logIn : this.signUp)}>
                <input 
                    name='username'
                    value={this.state.username}
                    placeholder='username'
                    onChange={this.handleChange}
                />
                <input 
                    name='password'
                    value={this.state.password}
                    placeholder='password'
                    onChange={this.handleChange}
                />
            <button type="submit">{this.state.signedUp ? "Login" : "Sign Up"}</button>
            </form>
            <button onClick={this.signOut}>Sign Out</button>
        </div>
    )
} else {
     return <TopBar toggleLogin={this.toggleLogin}/>
}

  }
}
