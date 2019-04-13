import React from 'react'
import Calendar from "../../components/Calendar/index"; 
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import $ from 'jquery';
import moment from 'moment';
import { renderDateCell } from '@fullcalendar/core';
//import FullCalendar from 'fullcalendar-reactwrapper';

export default class ValueToCal extends React.Component {
    
      render() {
        let addEvent = $(function() {

            $('.calendarM').fullCalendar({
              defaultView: 'month',
          
              header: {
                center: 'addEventButton'
              },
          
              customButtons: {
                addEventButton: {
                  text: 'add event...',
                  click: function() {
                    var dateStr = prompt('Enter a date in YYYY-MM-DD format');
                    var date = moment(dateStr);
          
                    if (date.isValid()) {
                      $('.calendarM').fullCalendar('renderEvent', {
                        title: 'dynamic event',
                        start: date,
                        allDay: true
                      });
                      alert('Great. Now, update your database...');
                    } else {
                      alert('Invalid date.');
                    }
                  }
                }
              }
            });
          
          })
      
      return (
          <div>
          {addEvent}
          </div>
      )
    }
}


