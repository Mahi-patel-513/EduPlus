import React, { useState, useRef, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import './CalendarComponent.css'

const CalendarComponent = () => {

    const calendarRef = useRef(null);
      const reminderTimeout = useRef(null); // Declare timeout ref to manage timeout ID
      const [events, setEvents] = useState([]);
    
      // Load events from localStorage when component mounts
      useEffect(() => {
        const savedEvents = JSON.parse(localStorage.getItem("studySessions"));
        if (savedEvents) {
          setEvents(savedEvents);
          savedEvents.forEach((event) => showReminder(event.title, event.date)); // Check reminders for all saved events
        }
    
        // Request permission to show notifications
        if (Notification.permission !== "granted") {
          Notification.requestPermission();
        }
    
        // Cleanup any active reminders when component unmounts
        return () => {
          if (reminderTimeout.current) {
            clearTimeout(reminderTimeout.current);
          }
        };
      }, []);

      // Check and remove expired events automatically
        useEffect(() => {
        const now = new Date(); // Get current time
  
        // Filter out past events
        const filteredEvents = events.filter(event => new Date(event.date) > now);
  
        // If events are removed, update state and localStorage
        if (filteredEvents.length !== events.length) {
            setEvents(filteredEvents);
            saveEventsToLocalStorage(filteredEvents);
        }
    }, [events]);
    
      // Function to save events to localStorage
      const saveEventsToLocalStorage = (newEvents) => {
        localStorage.setItem("studySessions", JSON.stringify(newEvents));
      };
    
      // Function to show reminder notifications
      const showReminder = (title, startTime) => {
        const timeBeforeReminder = 10 * 60 * 1000; // 10 minutes before the session
    
        reminderTimeout.current = setTimeout(() => {
          if (Notification.permission === "granted") {
            new Notification(`Reminder: ${title}`, {
              body: `Your study session for ${title} starts soon!`,
              icon: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
            });
          }
        }, new Date(startTime) - Date.now() - timeBeforeReminder);
      };
    
      const handleDateClick = (info) => {
        const title = prompt("Enter Study Session Title");
        const date = prompt("Enter Study Session Date and Time (YYYY-MM-DDTHH:MM)");
    
        if (title && date) {
          const newEvent = { title, date };
          const updatedEvents = [...events, newEvent];
          setEvents(updatedEvents);
          saveEventsToLocalStorage(updatedEvents); // Save events to localStorage
          showReminder(title, date); // Show reminder when the event is added
        }
      };


  return (
    <div className="study-planner-container">
      <h2 className="title">📅 EduPlus Planner </h2>
      <div className="calendar-container">
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: "today",
            center: "prev title next",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          events={events}
          dateClick={handleDateClick}
        />
      </div>
    </div>
  )
}

export default CalendarComponent
