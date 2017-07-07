import { PropTypes, Component } from 'react'
import { Form, Container , Button, Message } from 'semantic-ui-react'
import axios from 'axios'


export const AddUser = ({ iconimage, fname,lname, age, ethnicity, livesin, speaks}) => {
	
	let _iconimage, _fname,_lname, _age, _ethnicity, _livesin, _speaks


	const submit=(e)=> {
		e.preventDefault()
		
		const newuser= { iconimage: _iconimage.value,
						 fname : _fname.value,
						 lname : _lname.value,
					     age: parseInt(_age.value),
						 ethnicity : _ethnicity.value,
						 livesin : _livesin.value,
						 speaks : _speaks.value
						}
						
		//console.log(newuser);
		axios.post('http://localhost:4000/user', newuser)
			 .then(response => console.log(response.data));
			 
		//this.router.push('/');
	}

	return (
			<Container textAlign='left'>			
			<Message
			  attached
			  header='Sign Up'
			  content='Fill out the form below to experience the awesome'
			/>
			<Form onSubmit={submit} className='attached fluid segment'>
			<div>
				<label>First Name</label>
				<input type='text' required defaultValue={fname} ref={(input) => { _fname = input; }} />
			</div>
			<div>
				<label>Last Name</label>
				<input type='text' required defaultValue={lname} ref={(input) => { _lname = input; }} />
			</div>
			<div>
				<label>Age</label>
				<input type='text' required defaultValue={age} ref={(input) => { _age = input; }} />
			</div>
			<div>
				<label>Ethnicity</label>
				<input type='text' required defaultValue={ethnicity} ref={(input) => { _ethnicity = input; }} />
			</div>
			<div>
				<label>Lives In</label>
				<input type='text' required defaultValue={livesin} ref={(input) => { _livesin = input; }} />
			</div>
			<div>
				<label>Speaks</label>
				<input type='text' required defaultValue={speaks} ref={(input) => { _speaks = input; }} />
			</div>
			<div>
				<label>Avatar Image</label>
				<input type='text' id='iconimage' required defaultValue={iconimage} ref={(input) => { _iconimage = input; }}/>
			</div>

			
			  <Button color='blue'>Submit</Button>
			</Form>
			<Message attached='bottom' warning>
			  For queries please connect the site admin <a href='mailto:experiencedigitial@gmail.com'>Mark Dave</a>.
			</Message>
  
			</Container>
			
		)
}

AddUser.defaultProps = {
	iconimage: "male.jpg",
	fname: "",
	lname: "",
	age : 0,
	ethnicity : "",
	livesin :"",
	speaks: ""
}

AddUser.propTypes = {
	iconimage: PropTypes.string.isRequired,
	fname: PropTypes.string.isRequired,
	lname: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired,
	ethnicity: PropTypes.string.isRequired,
	livesin: PropTypes.string.isRequired,
	speaks:PropTypes.string.isRequired	
}