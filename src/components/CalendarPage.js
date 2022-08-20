import React, { useState, useEffect } from 'react';
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


const events = [

];

function CalendarPage() {
  
  // eventsToLoad is the default state for allEvents
  // if the localstorage for 'events' exist then it will load that saved state into allEvents
  // else it will just use the empty events[] defined above, loading no events on the calendar
  const eventsToLoad = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : events

  // calendar events are in allEvents state [], THERE IS CURRENTLY NO WAY TO DELETE EVENTS THROUGH THE UI
  const [allEvents, setAllEvents] = useState(eventsToLoad)  
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" })

  function handleAddEvent() {
    if (newEvent.title === "" || newEvent.start === "" || newEvent.end === "") {
      console.log('Not enough event info')
    }
    else {
      setAllEvents([...allEvents, newEvent])
    }
  }

  // whenever list of events is updated, save that to localstorage, this allows the events to persist on page reload
  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(allEvents));
  }, [allEvents]);

  return (
    <div className="App">
      <button> Add Event</button>
      <div>
        <input
          type="text"
          placeholder="Add Title"
          style={{ width: "20%", marginRight: "10px" }}
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />

        <DatePicker
          placeholderText="Start Date"
          style={{ marginRight: "10px" }}
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start })} />

        <DatePicker
          placeholderText="End Date"
          selected={newEvent.end}
          onChange={(end) => setNewEvent({ ...newEvent, end })} />

        <button style={{ marginTop: "10px" }} onClick={handleAddEvent} >
          Submit
        </button>

      </div>

      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
      />

    </div>
  );
}

export default CalendarPage;
