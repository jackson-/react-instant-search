import React, {Component} from 'react';

export default class DisplayTable extends Component {
	constructor(props){
		super(props);
	}

	render(){
		let rows = [];
		this.props.data.forEach(function(person){
			rows.push(<tr key={person.roll}><td>{person.name}</td><td>{person.roll}</td></tr>)
		});
		return(
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Roll #</th>
					</tr>
				</thead>
				<tbody>
					{rows}
				</tbody>
			</table>
		);
	}
}