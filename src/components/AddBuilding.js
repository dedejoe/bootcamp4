import React from 'react';

class AddBuilding extends React.Component {

	render() {
		const { addListing } = this.props;		

		return ( 
			<form>
				<h4> To add a building listing, add the parameters below and click "Add New Building" </h4>
				<input type="text" ref="nameInput" placeholder="Input a name..."/>
				<input type="text" ref="codeInput" placeholder="Input a code..."/>
				<input type="text" ref="addrInput" placeholder="Input an andress..."/>
				<input type="text" ref="longInput" placeholder="Input the longitude..."/>
				<input type="text" ref="latInput" placeholder="Input the latitude..."/>
				<button onClick={(a) => {a.preventDefault(); addListing(this.refs.nameInput.value, this.refs.codeInput.value,
				 this.refs.addrInput.value, this.refs.longInput.value, this.refs.latInput.value)}}> Add new building </button>
			</form>
		);
	}
}

export default AddBuilding;
