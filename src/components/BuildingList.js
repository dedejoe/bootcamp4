import React from 'react';

class BuildingList extends React.Component {
	render() {
		//console.log('This is my directory file', this.props.data);
		const { data, selectedUpdate, getFilterText } = this.props;
		//const filteredItems = items.filter(data => data.name.includes())

		function contains(object) {
			return (object.name.toLowerCase()).includes(getFilterText());
		}

		const filtered = data.filter(contains)
		const buildingList = filtered.map(directory => {
			return (
				<tr key={directory.id} onClick={() => {
					selectedUpdate(directory.id - 1) 
				   }}>
					<td>{directory.code} </td>	
					<td> {directory.name} </td>
				</tr>
			);
		});

		return <div>{buildingList}</div>;
	}
}
export default BuildingList;
