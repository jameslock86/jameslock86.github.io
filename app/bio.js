import React from 'react';
import GHS from './GHS.jpg';
import Languages from './languages';
const Bio = () =>{
	return (

		<div className="row">
			<div className= "col-sm-5">
				<div className="card mb-6" style={{width: 400, height: 400}}>
					<img src={ require('./GHS.jpg') } style={{width: 200, height: 200 }} />
					<div className="card-block">
						<h4 className="card-title">James Lockwood</h4>
						<p className="card-text">I am a Fullstack Web Developer</p>
					</div>
				</div>
			</div>
			<div className="col-sm-5">
				<div className="card mb-6" style={{width: 400, height: 400}}>
					<Languages />
				</div>
			</div>
		</div>
	);
};
export default Bio;
