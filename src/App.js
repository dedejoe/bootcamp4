import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import AddBuilding from './components/AddBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import cloneDeep from 'lodash/cloneDeep';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: -1,
      init: true

    };
    
    this.filterUpdate = this.filterUpdate.bind(this);
    this.selectedUpdate = this.selectedUpdate.bind(this);
    this.getSelected = this.getSelected.bind(this);
    this.getFilterText = this.getFilterText.bind(this);
    this.addListing = this.addListing.bind(this);
    this.sortListings = this.sortListings.bind(this);
    this.deleteListing = this.deleteListing.bind(this);
  }

  filterUpdate(value) {
    this.setState({
      filterText: value
    });
  }

  addListing(name, code, addr, long, lat) {

    const newListing = cloneDeep(this.props.data[0])
    newListing.name = name.charAt(0).toUpperCase() + name.slice(1);;
    newListing.code = code.toUpperCase();

    if (addr != "") {
      newListing.address = addr;
    }
    else {
      newListing.address = null;
    }
    
    if (long != "") {
      newListing.coordinates.longitude = long;
    }
    else {
      newListing.coordinates.longitude = null;
    }

    if (lat != "") {
       newListing.coordinates.latitude = lat;
    }
    else {
      newListing.coordinates.latitude = null;
      newListing.coordinates = null;
    }

    newListing.id = this.props.data.length;

    this.props.data.push(newListing)

    this.setState({
      data: this.props.data
    })

    this.sortListings()
  }

  sortListings() {
    const sorted = this.props.data.sort(function(a, b){
			if(a.code < b.code) { return -1; }
			if(a.code > b.code) { return 1; }
			return 0;
    })

    for (var i = 0; i < sorted.length; i++) { 
      sorted[i].id = i + 1
    } 

    this.setState({
      data: sorted
    })
  }

  deleteListing(id) {

    let data = this.props.data
    data = data.splice(id - 1, 1);

    this.setState({
      data: data,
      selectedBuilding: -1
    })
    this.sortListings()
  }

  selectedUpdate(id) {
    this.setState({
      selectedBuilding: id
    })
  }

  getSelected() {
    return this.state.selectedBuilding;
  }

  getFilterText() {
    return this.state.filterText;
  }

  render() {
    
    if (this.state.init) {
      //this.sortListings()
      this.setState({
        init: false
      })
    }

    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search filterUpdate={this.filterUpdate} />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList selectedUpdate={this.selectedUpdate}
                    data={this.props.data} getFilterText={this.getFilterText}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
            <ViewBuilding getSelected={this.getSelected} data={this.props.data} deleteListing={this.deleteListing.bind(this)}/>
            </div>
            <div className="column3">
            <AddBuilding addListing={this.addListing}/>
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
