import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import "./main.css"

export default class DemoApp extends React.Component {

  render() {
    return (
      <FullCalendar
        showNonCurrentDates={false} 
        // height={530} 
        
        fixedWeekCount={false}
        defaultView="dayGridMonth" 
        plugins={[ dayGridPlugin ]} />
    )
  }

}