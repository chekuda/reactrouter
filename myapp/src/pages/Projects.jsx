import React, { Component } from 'react';

class Projects extends Component {
	componentWillMount(){
    	console.log(this.props.match.params.project)
	}
	render() {
		return (
			<div className='Projects'>
				<div className='Projects-header'>
				<p>{this.props.match.params.project}</p>
				</div>
			</div>
		)
	}
}

export default Projects;