import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import axios from "axios";

import "./main.css"

export default class Calendar extends React.Component {
  state = {
    testEvents : [
      {allDay: true,
      start: "2019-04-12",
      title: "Test Event 01"
    },
    {allDay: false,
    start: "2019-04-14T13:30:00",
    title: "Test Event 02"}
  ]
}
  componentDidMount(){
    this.buildSchedule();
    // console.log(this.state.events)
  }
  
  // loadSchedule(){
  //   this.getSchedule("5cafbbab08fb442350951b1f")
  //   .then(res => this.setState({events: res.data},function(){
  //     console.log(this.state.events)
  //   }))
  //   .catch(err => console.log(err))
  // }
  buildSchedule(){
    this.getSchedule("5cafbbab08fb442350951b1f")
    .then(res =>
      {
        console.log(res.data)
        var schedule =[]
        
        for(let i = 0; i < res.data.length; i++){
          let event = {}
          event.title = res.data[i].title
          event.start = res.data[i].start
          event.allDay = res.data[i].allDay
          schedule.push(event)
        }
        this.setState({events: schedule})
        console.log(this.state.events)
      }
    )

  }
  getSchedule = id => {
    return axios.get("/allSchedule/" + id);
    
  }

  render() {
    return (
      <FullCalendar
        showNonCurrentDates={false} 
        // height={530} 
        events={this.state.testEvents}
        
        fixedWeekCount={false}
        defaultView="dayGridMonth" 
        plugins={[ dayGridPlugin ]} />
    )
  }

}