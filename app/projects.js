import React from 'react';
import './projects.css';
import Involved from './projectPics/Involved.png';
import Find_an_Experience from './projectPics/Find_an_Experience.png';
import KillBase from './projectPics/Killbase.png';
import whats_in_your_fridge from './projectPics/Whats_in_your_fridge.png';
const Projects = () =>{
	return(
		<div>

			<h1>A few of my projects</h1>
			<div className="row">
				<div className="col-sm">
					<div className="flip-container" ontouchstart="this.classList.toggle('hover');">
						<div className="flipper">
							<div className="front">
								<h2>Find an Experience</h2>
								<img src={ require('./projectPics/Find_an_Experience.png') } style={{width: 315, height: 300 }} />
							</div>
							<div className="back">
								<h2>Description</h2>
								<p> This porject gives the user the ability to find a local park to job in all they need is a city and state so it's mobile friendly as well for the person that's on the go.</p>
								<h4>Tech Used</h4>
								<li>GitHub</li>
								<li>JavaScript</li>
								<li>CSS</li>
								<li>HTML</li>
							</div>
						</div>
					</div>
				</div>

				<div className="col-sm">
					<div className="flip-container" ontouchstart="this.classList.toggle('hover');">
						<div className="flipper">
							<div className="front">
								<h2>KillBase</h2>
								<img src={ require('./projectPics/Killbase.png') } style={{width: 315, height: 300 }} />
							</div>
							<div className="back">
								<h2>Description</h2>
								<p> I built out a RESTful API and used it to build out the functalality needed to preform CRUD abilities.</p>
								<h4>Tech Used</h4>
								<li>Knex</li>
								<li>Express</li>
								<li>PostgreSQL</li>
								<li>JQuery</li>
								<li>GitHub</li>
								<li>JavaScript</li>
								<li>CSS</li>

							</div>
						</div>
					</div>
				</div>
				<div className="col-sm">
					<div className="flip-container" ontouchstart="this.classList.toggle('hover');">
						<div className="flipper">
							<div className="front">
								<h2>Whats in your Fridge</h2>
								<img src={ require('./projectPics/Whats_in_your_fridge.png') } style={{width: 315, height: 300 }} />
							</div>
							<div className="back">
								<h2>Description</h2>
								<p> This an app that give people the chance to get involved in their local governemnt in a non partisan way.</p>
								<h4>Tech Used</h4>
								<li>Express</li>

								<li>MongoDB</li>
								<li>Axios</li>
								<li>Mongose</li>
								<li>Materialize</li>
								<li>GitHub</li>
								<li>Trello</li>
								<li>JavaScript</li>
								<li>OAuth</li>
								<li>Bcrypt</li>

								<li>CSS</li>
							</div>
						</div>
					</div>
				</div>


				<div className="col-sm">
					<div className="flip-container" ontouchstart="this.classList.toggle('hover');">
						<div className="flipper">
							<div className="front">
								<h2>Involved</h2>
								<img src={ require('./projectPics/Involved.png') } style={{width: 315, height: 300 }} />
							</div>
							<div className="back">
								<h2>Description</h2>
								<p> This an app that give people the chance to get involved in their local governemnt in a non partisan way.</p>
								<h4>Tech Used</h4>
								<li>React</li>
								<li>React-Router</li>
								<li>Redux</li>
								<li>Express</li>
								<li>MongoDB</li>
								<li>Axios</li>
								<li>Mongose</li>
								<li>Bootstrap</li>
								<li>GitHub</li>
								<li>Trello</li>
								<li>JavaScript</li>
								<li>JSX</li>
								<li>CSS</li>

							</div>
						</div>
					</div>
				</div>

			</div>

		</div>
	);
};
export default Projects;
