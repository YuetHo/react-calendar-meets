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
  {
    title: 'Big Meeting',
    allDay: true,
    start: new Date(2022, 7, 0),
    end: new Date(2022, 7, 0),
  },
  {
    title: 'Vacation',
    start: new Date(2022, 7, 7),
    end: new Date(2022, 7, 10),
  },
  {
    title: 'Conference',
    start: new Date(2022, 7, 20),
    end: new Date(2022, 7, 23),
  },
];

export default function CalendarPage() {

  const [newEvent, setNewEvent] = useState({title:'', start:'', end:''})
  const [allEvents, setAllEvents] = useState(events)

  return (
    <div className='calendarPage'>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor='start'
        endAccessor='end'
        style={{margin: "3%"}}
      />
    </div>
  )
}
