import React from 'react'
import './sing-in-and-sing-up.styles.scss'
import SingIn from '../../components/sing-in/sing-in.component';
import SingUp from '../../components/sing-up/sing-up.component';


const SingInAndSingPage = () =>(
	<div className='sing-in-and-sing-up'>
		<SingIn />
		<SingUp />
	</div>
)


export default SingInAndSingPage