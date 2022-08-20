import React, { useState, useEffect, useRef } from 'react';
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

const calendarStyle = {
  width: "80%",
  height: "90%",
  margin: "2%"
}

function CalendarPage() {

  // eventsToLoad is the default state for allEvents
  // if the localstorage for 'events' exist then it will load that saved state into allEvents
  // else it will just use the empty events[] defined above, loading no events on the calendar
  const eventsToLoad = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : events

  // calendar events are in allEvents state [], THERE IS CURRENTLY NO WAY TO DELETE EVENTS THROUGH THE UI
  const [allEvents, setAllEvents] = useState(eventsToLoad)
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" })

  const titleRef = useRef(null)
  const startDateRef = useRef(null)
  const endDateRef = useRef(null)

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
    <div className="calendarPage">

      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={calendarStyle}
      />

      <div className='rightPane'>
        <form className='addEventPane' onSubmit={handleAddEvent}>
          <h2> Create new events</h2>
          <input
            className='addEventTitleInput'
            ref={titleRef}
            type="text"
            placeholder="Add Title"
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          />

          <DatePicker
            wrapperClassName='addEventDate'
            ref={startDateRef}
            placeholderText="Start Date"
            selected={newEvent.start}
            onChange={(start) => setNewEvent({ ...newEvent, start })}
          />

          <DatePicker
            wrapperClassName='addEventDate'
            ref={endDateRef}
            placeholderText="End Date"
            selected={newEvent.end}
            onChange={(end) => setNewEvent({ ...newEvent, end })}
          />

          <button className='addEventSubmit' type='submit' >
            Add Event
          </button>
        </form>
        <div>

        </div>
      </div>


    </div>
  );
}

export default CalendarPage;
