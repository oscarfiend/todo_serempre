import React, { Component, useState } from "react"
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react"

const mapStyles = {
  maxWidth: "100%",
  height: "100%",
}

class MapComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeMarker: {},
      showingInfoWindow: false,
      activeTask: {},
      activeTitle:""
    }
  }

  onMarkerClick(marker, task,title) {
    this.setState({
      activeTask: task,
      activeMarker: marker,
      showingInfoWindow: true,
      activeTitle:title
    })
  }

  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    })

  onMapClicked = () => {
    if (this.state.showingInfoWindow)
      this.setState({
        activeMarker: null,
        showingInfoWindow: false
      })
  }

  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={20}
          style={mapStyles}
          onClick={this.onMapClicked}
          initialCenter={this.props.tasks[0]?.cordinate || {lat: "6.185729299999999",lng: "-75.5730791"}}
        >
        {/* marks for the tasks */}
          {this.props.tasks?.map(task => (
            <Marker
              key={task.id}
              position={task.cordinate}
              onClick={() => this.onMarkerClick(task.cordinate, task,`Task created: ${task.title}`)}              
              name={task.title}
            />
          ))}

           {/* marks for the tasks */}
           {this.state.activeTask.updates?.map((update,index) => (
            <Marker
              key={index}
              position={update}            
              name={`Task updated:${this.state.activeMarker?.title}`}
              icon= {
                {url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}
              }
              onClick={() => this.onMarkerClick(update,this.state.activeTask,`Task Updated: ${this.state.activeTask.title}`)}  
            />
          ))}

         

          {/* show the info of one mark */}
          <InfoWindow
            position={this.state.activeMarker}
            marker={this.activeMarker}
            onClose={this.onInfoWindowClose}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <p className="text-sm">
               {this.state.activeTitle}
              </p>
            </div>
          </InfoWindow>
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAOoJTAvSnoDm8tPtD3fJsi35n3-VAbbRA",
  language: "spanish",
})(MapComponent)
