import React, { Component } from 'react';

class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {name: '',number:'',email:'',message:''};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({[event.target.name]: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		let data = {
			name: this.state.name,
			number: this.state.number,
			email: this.state.email,
			message: this.state.message
		};
		console.log('input data', data);
		localStorage.getItem('data', data);
	}

	render() {

		return (
			<div className="col">

				<form onSubmit={this.handleSubmit}>
					<label>
          Full Name:
						<br/>
						<input className="col-md-6" type="text" name="name" value={this.state.name} onChange={this.handleChange} />
					</label>
					<br/>
					<label>
          Phone Number:
						<br/>
						<input className="col-md-6" type="text" name = "number" value={this.state.number} onChange={this.handleChange} />
					</label>
					<br/>
					<label>
          Email:
						<br/>
						<input className="col-md-6" type="text" name="email" value={this.state.email} onChange={this.handleChange} />
					</label>
					<br/>
					<label>
          Message:
						<br/>
						<textArea className="col-md-6" type="text" name="message" value={this.state.message} onChange={this.handleChange} style={{width: 500, height: 300 }}/>
					</label>
					<br/>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}export default Footer;
