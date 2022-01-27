import React from 'react'
import './sing-in.styles.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';



class SingIn extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			email: '',
			password: ''
		}
	}

	handleSubmit = event => {
		event.preventDefault();
		this.setState({ email: '', password: '' })
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
						handleChange = {this.handleChange}
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
					
					<CustomButton type="submit">Sing in</CustomButton>
				</form>
			</div>
		)
	}
}

export default SingIn