import React, {Component} from 'react';
import './Login.css';
import Header from '../../common/header/Header';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from '../home/Home';
import ReactDOM from 'react-dom'


const customStyles = {
    card: {
        padding: '10px',
        position: 'relative',
        top: '20px',
        left: '50%',
        width: '420px',
        transform: 'translateX(-50%)',
    },
    title: {
        fontSize: 20
    }
};

class Login extends Component{

        constructor(){
        super();
        this.state = {//setting intial state for username and password to be rendered on card
            modalIsOpen : true,
            value : 0,
            usernameRequired: "dispNone",
            username: "",
            passwordRequired: "dispNone",
            password: "",
            usernameAuth: "dispNone",
            passwordAuth: "dispNone",
        }
    }

    loginClickHandler = () => {

        const username = this.state.username;// setting variable for username, password and access-token
        const password = this.state.password;
        const accessToken = '8661035776.d0fcd39.39f63ab2f88d4f9c92b0862729ee2784';

        if(username === ""){//Logic to display validation messages when input is empty
            this.setState({usernameRequired: "dispBlock"});
            this.setState({usernameAuth: "dispNone"});
        } else {
            this.setState({usernameRequired: "dispNone"});
        }

        if(password === ""){
            this.setState({passwordRequired: "dispBlock"});
            this.setState({passwordAuth: "dispNone"});
        } else {
            this.setState({passwordRequired: "dispNone"});
        }

        if (username !== "imageusername" && username !== "") {//Logic to display validation messages when input is incorrect
            this.setState({usernameAuth: "dispBlockAuthenticate"});
        }

        if (password !== "imagepassword" && password !== "") {
            this.setState({passwordAuth: "dispBlockAuthenticate"});
        }

        if (username !== "" && password !== "") {//Logic to check if input is not empty and whether correct credentials are provided
            username === "imageusername" ?  this.setState({usernameAuth: "dispNone"}) : this.setState({usernameAuth: "dispBlockAuthenticate"});
            password === "imagepassword" ? this.setState({passwordAuth: "dispNone"}) : this.setState({passwordAuth: "dispBlockAuthenticate"});
        if(username === "imageusername" && password === "imagepassword"){
            sessionStorage.setItem('username', "imageusername");
            sessionStorage.setItem('access-token', 'accessToken');
            ReactDOM.render(<Home sessionStorage={this.sessionStorage}/>, document.getElementById('root'));
        }
        }
    }

    inputUsernameChangeHandler =(e) =>{//function to handle state change in the username field
        this.setState({username: e.target.value});
    }

    passwordChangeHandler =(e) => {
        this.setState({password: e.target.value});
    }

    render(){
        return(
            <div>
                <Header />
                
                <div>
                
                <Card style={customStyles.card}>
                    <CardContent>
                    <Typography style={customStyles.title}> <b>LOGIN</b> </Typography><br />
                    <FormControl required style={{width: '100%'}}>
                    <InputLabel htmlFor="userName">Username</InputLabel>
                            <Input id="username" type="text" username={this.state.username} onChange={this.inputUsernameChangeHandler}/>
                            <FormHelperText className={this.state.usernameRequired}>{/* form helper text for empty validation */}
                                <span className="red">required</span>
                            </FormHelperText>
                            <FormHelperText className={this.state.usernameAuth}>{/* form helper text for incorrect validation */}
                                <span className="red">Incorrect username and/or password</span>
                            </FormHelperText>
                            </FormControl><br/><br/>
                        <FormControl required style={{width: '100%'}}>
                        <InputLabel htmlFor="password">Password</InputLabel>
                            <Input id="password" type="password" password={this.state.password} onChange={this.passwordChangeHandler} />
                            <FormHelperText className={this.state.passwordRequired}>
                                <span className="red">required</span>
                            </FormHelperText>
                            <FormHelperText className={this.state.passwordAuth}>
                                <span className="red">Incorrect username and/or password</span>
                            </FormHelperText>
                        </FormControl><br/><br/>
                        <Button variant="contained" color="primary" onClick={this.loginClickHandler}>LOGIN</Button>{/* Login button onclick handler execution */}
                        </CardContent>
                </Card>
                </div>
            </div>
        )

    }
}
export default Login;