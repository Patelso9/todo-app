import React, { Component } from 'react'

class TodoApp extends Component {
  render() {
    return (
      <div className='TodoApp'>
    
        <LoginComponent />
        
        </div>
    )
  }
}


class LoginComponent extends Component {
    
    constructor(props){
        super (props)

        this.state = {
            username: 'myname',
            password: '',
            hasLoginFailed: true,
            showSucessMessage: false
        }

        // this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClick = this.loginClick.bind(this)
    }

    handleChange(event){
        this.setState({[event.target.name]:event.target.value})
    }

    loginClick(){
        console.log("click")
        if (this.state.username === 'myname' && this.state.password==='dummy') {
            console.log('Sucessful')
            this.setState({showSucessMessage: true})
            this.setState({hasLoginFailed: false})
        }
        else {
            console.log('Failed')
            this.setState({showSucessMessage: false})
            this.setState({hasLoginFailed: true})

        }
    }

    render() {
        return (
        <div>
            {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
            {this.state.hasLoginFailed && <div>INVALID CREDENTIALS</div>}
            {this.state.showSucessMessage && <div>SUCCESS</div>}
            User Name : <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
            Password : <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>

            <button onClick={this.loginClick}>Login</button>
        </div>
        )
    }

}

// function ShowInvalidCredentials(props){
//     if(props.hasLoginFailed){
//         return <div>invalid credentials</div>
//     }
//     return <div>Sucessful login</div>
// }

export default TodoApp