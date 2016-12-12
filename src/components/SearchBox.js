import React, {Component} from 'react';

export default class SearchBox extends Component {

	constructor(props){
		super(props);
		this._doSearch = this._doSearch.bind(this);
	}
	
	_doSearch(){
		console.log("SEARCH", this.refs.searchInput, this.props)
		let query=this.refs.searchInput.value;
		this.props.doSearch(query);
	}

	render(){
		return(
			<input type="text" ref="searchInput" placeholder="Search Name" value={this.props.query} onChange={this._doSearch}/>
		);
	}
}