import React from 'react';
import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


import { signInWithGoogle } from '../../firebase/firebase.utils';



class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }


    handleChange = event => {
        const {value, name} = event.target;
        this.setState({ [name]: value });
    }


    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: ''})
    }




    render(){
        return(
            <div className='sign-in'>
                <h2>I already have and account</h2>
                <span>Sign In with your e-mail and password</span>


                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name="email" 
                    type="email" 
                    value={this.state.email}  
                    handleChange={this.handleChange}
                    label="E-mail"

                    required
                    />

                    <FormInput 
                    name="password" 
                    type="password" 
                    value={this.state.password}  
                    handleChange={this.handleChange}
                    label="Password"
                    required
                    />


                <div className='buttons'>

                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        {''}
                        Sign in with Gooogle
                        {''}
                    </CustomButton>
                </div>
                </form>


            </div>
        )
    }
}

export default SignIn;