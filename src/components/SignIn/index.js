import React,{Component} from 'react'
import {withFirebase} from '../Firebase';
import {withRouter} from 'react-router-dom';
import {compose} from 'recompose';
import {SignUpLink} from '../SignUp';
import * as ROUTES from '../constants/routes'

const SignInPage=()=>(
    <div>
        <SignInForm/>
        <SignUpLink/>
    </div>
)

const INITIAL_STATE={
    email:"",
    password:"",
    error:null,
}

class SignInFormBase extends Component {
    constructor(props) {
        super(props);

        this.state={...INITIAL_STATE};
        }
    
    onSubmit=(e)=>{
        const {email,password}=this.state;

        this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
 
    e.preventDefault();
    }

    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    render() {
        const {email,password,error}=this.state;

        const isValid=password===""||email==="";
        return (
            
            <form onSubmit={this.onSubmit}>
                <input
                  name="email"
                  value={email}
                  onChange={this.onChange}
                  type="email"
                  placeholder="Email Address"
                />

                <input
                  name="password"
                  value={password}
                  onChange={this.onChange}
                  type="password"
                  placeholder="Password"
                />

                <button type="submit" disabled={isValid}>Sign In</button>

                {error && <p>{error.message}</p>}
            </form>
        )
    }
}


const SignInForm=compose(withRouter,withFirebase)(SignInFormBase);

export default SignInPage;

export {SignInForm};

