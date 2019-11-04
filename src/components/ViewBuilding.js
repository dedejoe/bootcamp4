import React from 'react';

class ViewBuilding extends React.Component {

	render() {
		const { data, getSelected, deleteListing } = this.props;
		const listingid = getSelected();
		const listing = data[listingid]

		return ( 
				<div>
					<p> 
					{' '}
					{ listingid === -1 ? (
					<i>"Click on a name to view more information"</i>
					) : (
						<ul>
							<h5>{listing.name}</h5>

							{ listing.coordinates ? ( 
								<React.Fragment>
									<i> {listing.address} </i>
									<ul>Latitude: {listing.coordinates.latitude} </ul>
									<ul>Longitude: {listing.coordinates.longitude} </ul>
								</React.Fragment>
							) : ( <i> (No Address Data) </i> )}
							<ul> </ul>
							<button onClick={(b) => {b.preventDefault(); deleteListing(listing.id)}}> Delete this building </button>
						</ul>

					)}
					</p>
				</div>
		);
	}
}

export default ViewBuilding;
