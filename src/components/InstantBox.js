import React, {Component} from 'react';
import SearchBox from './SearchBox';
import DisplayTable from './DisplayTable';

export default class InstantBox extends Component {
	constructor(props){
		super(props);
		this.state = {
			query:"",
			filteredData:this.props.data
		};
		this._doSearch = this._doSearch.bind(this);
	}

	_doSearch(queryText){
		console.log(queryText);
		let queryResult = [];
		this.props.data.forEach(function(person){
			if(person.name.toLowerCase().indexOf(queryText)!==-1){
				queryResult.push(person);
			}
		});

		this.setState({
			query:queryText,
			filteredData:queryResult
		});
	}

	render(){
		return(
			<div className="InstantBox">
				<h2>Void Canvas Instant Search</h2>
				<SearchBox query={this.state.query} doSearch={this._doSearch} />
				<DisplayTable data={this.state.filteredData} />
			</div>
		);
	}
}