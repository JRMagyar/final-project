import React from "react";
import "./style.css";
//mport { Calendar } from '@fullcalendar/core';
// ../node_modules/@fullcalendar/core
//import listPlugin from '@fullcalendar/list';

// export class ListPlugin extends React.Component{
//   constructor(props) {
//     super(props);
//     this.calendarList = this.calendarList.bind(this);
//   }

// }
// {allDay: true,
//   start: "2019-04-12",
//   title: "Test Event 01",
//   url: "https://mongoosejs.com/docs/populate.html"
function ListPlugin(props){
  return (
    <div>
      <ul>
        <li>All Day: {props.allday}</li>
        <li>Start: {props.start}</li>
        <li>Title: {props.title}</li>
      </ul>
    </div>
  )
}

export default ListPlugin