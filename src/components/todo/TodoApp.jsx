import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, Redirect, Link} from 'react-router-dom'
import withNavigation from './WithNavigation'
import withParams from './withParams';
import AuthenticatedRoute from './AuthenticatedRoute';
import AuthenticationService from './AuthenticationService';

class TodoApp extends Component {
  render() {
    const LoginComponentWithNav = withNavigation(LoginComponent);
    const WelcomeComponentWithParams = withParams(WelcomeCompoenent);
    const HeaderComponentWithNav= withNavigation(HeaderComponent);
    return (
      <div className='TodoApp'>
      <Router>
        <HeaderComponentWithNav />
         <Routes>
                <Route path="/" element={<LoginComponentWithNav />} /> 
                <Route path="/login" element={<LoginComponentWithNav />}  />
                <Route path="/welcome/:name" element={
                    <AuthenticatedRoute>
                        <WelcomeComponentWithParams/>
                    </AuthenticatedRoute> } />
                <Route path="/todo" element={
                    <AuthenticatedRoute>
                        < ListTodoComponent />
                    </AuthenticatedRoute> }  />
                {/* // <Route path="/logout" element={< />}  /> */}
                <Route path="*" element={<ErrorComponent />}  />
            </Routes>
            <FooterComponent />
        </Router> 
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
            hasLoginFailed: false,
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
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
            this.props.navigate(`/welcome/${this.state.username}`)
        }
        else {
            console.log('Failed')
            this.setState({showSucessMessage: false})
            this.setState({hasLoginFailed: true})

        }
        console.log(this.state)
    }

    render() {
        return (
        <div>
            {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
            {this.state.hasLoginFailed && <div className='alert alert-warning'>INVALID CREDENTIALS</div>}
            {this.state.showSucessMessage && <div>SUCCESS</div>}
            <div className='TodoApp'>
                User Name : <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password : <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button className='btn btn-success' onClick={this.loginClick}>Login</button>
            </div>
            {/* You can manage your todo list <Link to="/todo">here</Link> */}

        </div>
        )
    }

}

function ErrorComponent(){
    return(
        <div>An Error has occured. I don't know what to do! Contact support at mail@mail.com</div>
    )
}

class WelcomeCompoenent extends Component {
    render(){
        return (
            <>
                <h1>Welcome!
                </h1>
                <div className='container'> 
                    Welcome {this.props.params.name}.
                    You can manage your todo list <Link to="/todo">here</Link>
                </div>
            </>
        )
    }

}

class HeaderComponent extends Component{
    render(){
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        return(
                <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <a href="http://www.turntofftea.com" className="navbar-brand">MyName</a>
                    </div>
                    <ul className= "navbar-nav">
                        <li><Link className="nav-link" to="/welcome">Home</Link></li>
                        <li><Link className="nav-link" to="/todo">Todo</Link></li>
                    </ul>
                    <ul className= "navbar-nav navbar-collapse justify-content-end">
                        <li><Link className="nav-link" to="/login">Login</Link></li>
                        <li><Link className="nav-link" to="/logout">Logout</Link></li>
                    </ul>
                </nav>
                </header>
            )
    }
}
class FooterComponent extends Component{
    render(){
        return(
            <footer>
                <span className="text-muted">All rights reserved: 2022 @turntofftea</span>
            </footer>
        )
    }
}

class ListTodoComponent extends Component{
    constructor (props){
        super(props)
        this.state = {
            todo : 
            [
                {id: 1, description : 'learn react', done: false, targetDate: "3/2/23"},
                {id: 2, description : 'be a pro in java', done: false, targetDate: "3/2/23"},
                {id: 3, description : 'be a cloud expert', done: false, targetDate: "3/2/23" }
            ]
        }
    }
    render() { 
        return (
            <div>
                <h1>List Todos</h1>
                <div className='containter'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>descripton</th>
                            <th>Is Completed?</th>
                            <th>Target Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.todo.map( todo =>
                        <tr>
                            <td>{todo.id}</td>
                            <td>{todo.description}</td>
                            <td>{todo.done.toString()}</td>
                            <td>{todo.targetDate}</td>
                        </tr>
                            )}
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}
 

export default TodoApp