import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import axios from "axios";

import "./main.css"

export default class Calendar extends React.Component {
  state = {
    events : {
      title: "Default Event",
      start: "2019-04-2",
      allDay: true
    }
  }
  componentDidMount(){
    this.loadSchedule()
    // console.log(this.state.events)
  }
  
  loadSchedule(){
    this.getSchedule("5cafbbab08fb442350951b1f")
    .then(res => this.setState({events: res.data},function(){
      console.log(this.state.events)
    }))
    .catch(err => console.log(err))
  }
  getSchedule = id => {
    return axios.get("/allSchedule/" + id);
    
  }

  render() {
    return (
      <FullCalendar
        showNonCurrentDates={false} 
        // height={530} 
        events={[this.state.events]}
        
        fixedWeekCount={false}
        defaultView="dayGridMonth" 
        plugins={[ dayGridPlugin ]} />
    )
  }

}