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
      title: "Test Event 01",
      url: "https://mongoosejs.com/docs/populate.html"
    },
    {allDay: false,
    start: "2019-04-14T13:30:00",
    title: "Test Event 02"}
  ],
  events: []
}
  componentDidMount(){
    // this.buildSchedule();
    this.loadSchedule();
    this.loadFinances();
    this.loadExpenses();
  }

  //load in schedule
  loadSchedule(){
    this.getSchedule("5cb22272faf92402403661c0")
    .then(res =>
      {
        // console.log(res.data)
        for(let i=0; i < res.data.length; i++){
          let schedule = this.state.events
          let data = res.data[i].calendar
          data.backgroundColor = "#80aaff"
          schedule.push(data)
          this.setState({events: schedule})
        }
    })
  }
  getSchedule = id => {
    return axios.get("/api/schedules/all/" + id);
    
  }
  //load in finances
  loadFinances(){
    this.getFinances("5cb22272faf92402403661c0")
    .then(res =>
      {
        // console.log(res.data)
        for(let i=0; i < res.data.length; i++){
          let schedule = this.state.events
          let data = res.data[i].calendar
          data.backgroundColor = "#00cc00"
          schedule.push(data)
          this.setState({events: schedule})
        }
    })
  }
  getFinances = id =>{
    return axios.get("/api/finances/all/" + id);
  }
  //load in expenses
  loadExpenses(){
    this.getExpenses("5cb22272faf92402403661c0")
    .then(res =>
      {
        console.log(res.data)
        for(let i=0; i < res.data.length; i++){
          let schedule = this.state.events
          let data = res.data[i].calendar
          data.backgroundColor = "#b30000"
          schedule.push(data)
          this.setState({events: schedule})
        }
    })
  }
  getExpenses = id => {
    return axios.get("/api/bills/all/" + id)
  }

  render() {
    return (
      <FullCalendar
        showNonCurrentDates={false} 
        // height={530} 
        events={this.state.events}
        
        fixedWeekCount={false}
        defaultView="dayGridMonth" 
        plugins={[ dayGridPlugin ]} />
    )
  }

}