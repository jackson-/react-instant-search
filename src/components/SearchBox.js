import React, {Component} from 'react';

export default class SearchBox extends Component {

	constructor(props){
		super(props);
		this._handleChange = this._handleChange.bind(this);
		this._handleSubmit = this._handleSubmit.bind(this);
	}
	
	_handleChange(e){
		console.log("CHNAGE", e.keyCode)
		let query=this.refs.searchInput.value;
		this.props.updateInput(query);
	}

	_handleSubmit(e){
		console.log("SUBMIT", e.keyCode)
		let query=this.refs.searchInput.value;
		if(e.keyCode === 13){
			this.props.doSearch(query.trim());
		} else{
			return;
		}
	}

	render(){
		return(
			<input type="text" ref="searchInput" placeholder="Search Name" value={this.props.query} onChange={this._handleChange} onKeyUp={this._handleSubmit}/>
		);
	}
}