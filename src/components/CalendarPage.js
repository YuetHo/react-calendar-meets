import React, { useState } from 'react';
import format from 'date-fns/format';
import getDay from 'date-fns/getDay';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// localization stuff for US
const locales = {
  'en-US': require('date-fns/locale/en-US')
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

// example events, remove this later
const events = [
  
];
function CalendarPage() {
  const [newEvent, setNewEvent] = useState({title: "" , start: "", end: ""})
  const [allEvents, setAllEvents] = useState(events)

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent])
  }
  return (
    <div className="App">
      <h1> Calendar</h1>
      <h2> Add new events</h2>
      <div>
        <input 
          type="text" 
          placeholder="Add Title" 
          style={{width: "20%" , marginRight: "10px"}}
          value={newEvent.title} 
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value})}
          />

        <DatePicker placeholderText="Start Date" 
          style={{marginRight: "10px"}}
          selected={newEvent.start} 
          onChange={(start) => setNewEvent({...newEvent, start})} />
        <DatePicker 
          laceholderText="End Date"
          selected={newEvent.end} 
          onChange={ (end) => setNewEvent({...newEvent, end})} />
         
         <button style={{marginTop: "10px" }} onClick= {handleAddEvent} > 
          Add Event 
         </button>
            
      </div>

    <Calendar 
      localizer={localizer} 
      events={allEvents}
      startAccessor = "start"
      endAccessor="end"
      style={{height: 500 ,margin:"50px"}}

    />

    </div>
  );
}

export default CalendarPage;
