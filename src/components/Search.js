import React from 'react';
import App from '../App';

class Search extends React.Component {
	render() {
		const { filterUpdate } = this.props
		//You will need to save the value from the textbox and update it as it changes
		//You will need the onChange value for the input tag to capture the textbox value
		return (
			<form>
				<input type="text" ref="filterInput" placeholder="Type to Filter"
          onChange={() => {
		   filterUpdate(this.refs.filterInput.value) 
          }}/>
			</form>
		);
	}
}
export default Search;
