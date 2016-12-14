import React, {Component} from 'react';
import SearchBox from './SearchBox';
import DisplayTable from './DisplayTable';

export default class InstantBox extends Component {
	constructor(props){
		super(props);
		this.state = {
			query:"",
			filteredData:this.props.data,
			filter_tags:[]
		};
		this._doSearch = this._doSearch.bind(this);
		this._updateInput = this._updateInput.bind(this);
	}

	_updateInput(queryText){
		console.log(queryText);
		this.setState({
			query:queryText
		});

	}

	_doSearch(queryText){
		console.log(queryText);
		let queryResult = [];
		let filter_tags = this.state.filter_tags;
		this.props.data.forEach(function(person){
			console.log("PERSON", person.tags)
			if(person.tags.indexOf(queryText)!==-1){
				queryResult.push(person);
				filter_tags.push(queryText);
			}
		});

		this.setState({
			query:queryText,
			filteredData:queryResult,
			filter_tags:filter_tags
		});
	}

	render(){
		let tag_elements = [];
		let tag_names = [];
		this.state.filter_tags.forEach(function(tag, i){
			if(tag_names.indexOf(tag) === -1){
				tag_elements.push(<span key={i}>{tag}</span>);
				tag_names.push(tag);
			}
		});
		console.log("TAGS", tag_names)
		return(
			<div className="InstantBox">
				<h2>Void Canvas Instant Search</h2>
				<SearchBox query={this.state.query} updateInput={this._updateInput} doSearch={this._doSearch} />
				<div id="tags">{tag_elements}</div>
				<DisplayTable data={this.state.filteredData} />
			</div>
		);
	}
}