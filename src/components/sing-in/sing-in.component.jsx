import React from 'react'
import './sing-in.styles.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';

import { auth, signInWithGoogle } from './../firebase/firebase.utils';


class SingIn extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			email: '',
			password: ''
		}
	}

	handleSubmit = async event => {
		event.preventDefault();

		const { email, password } = this.state

		try{
			await auth.signInWithEmailAndPassword(email, password)
			this.setState({ email: '', password: '' })
		}catch(error){
			console.log(error)
		}
	}

	handleChange = event => {
		const { name, value } = event.target;
		this.setState({ [name]: value })
	}

	render() {

		return (
			<div className='sing-in'>
				<h2>I already have an account</h2>
				<span>Sing in with your email and password</span>

				<form onSubmit={this.handleSubmit}>

					<FormInput type='email'
						name="email"
						id='email'
						value={this.state.email}
						handleChange={this.handleChange}
						label='email'
						required
					/>

					<FormInput type='password'
						name="password"
						id='password'
						value={this.state.password}
						handleChange={this.handleChange}
						label='password'
						required
					/>
					
					<div className='buttons'>
					<CustomButton type="submit">Sing in</CustomButton>
					<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
						Sing in with google
					</CustomButton>
					</div>
				</form>
			</div>
		)
	}
}

export default SingIn