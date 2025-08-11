'use client';

import { useState } from 'react';
import { format, parseISO } from 'date-fns';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';

const events = [
  { id: '1', title: 'Community Meetup', date: '2025-05-15' },
  { id: '2', title: 'Charity Run', date: '2025-05-15' },
  { id: '3', title: 'Board Meeting', date: '2025-05-20' },
];

export default function EventsPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDate, setFilterDate] = useState('');

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();

  const startWeekday = firstDayOfMonth.getDay();
  const emptyCells = Array(startWeekday).fill(null);
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const totalCells = [...emptyCells, ...daysArray];

  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date();

  // Filter events by month and search term
  const filteredEvents = events.filter(event => {
    const eventDate = parseISO(event.date);
    const matchesMonth = eventDate.getMonth() === month && eventDate.getFullYear() === year;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilterDate = !filterDate || event.date === filterDate;

    return matchesMonth && matchesSearch && matchesFilterDate;
  });

  // Helper to get events on a particular day
  const eventsForDay = (day: number) => {
    return filteredEvents.filter(event => {
      const eventDate = parseISO(event.date);
      return eventDate.getDate() === day;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-5xl mx-auto px-6 py-16">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Events
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with our upcoming events and activities
          </p>
        </div>

      {/* Filter Bar */}
      <div className="bg-white p-6 rounded-md shadow mb-8 flex flex-col md:flex-row gap-4 items-center">
        <input
          type="date"
          className="border rounded px-4 py-2 w-full md:w-auto"
          value={filterDate}
          onChange={e => setFilterDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search"
          className="border rounded px-4 py-2 w-full md:flex-1"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button
          onClick={() => {
            /* Can add a trigger for filtering if needed */
          }}
          className="bg-blue-100 text-blue-800 flex items-center gap-2 px-4 py-2 rounded-md hover:bg-blue-200"
        >
          <Search size={16} />
          Find Events
        </button>
      </div>

      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={handlePrevMonth} className="bg-white px-3 py-2 rounded shadow">
          <ChevronLeft />
        </button>
        <h2 className="text-lg font-semibold">{format(currentMonth, 'MMMM yyyy')}</h2>
        <button onClick={handleNextMonth} className="bg-white px-3 py-2 rounded shadow">
          <ChevronRight />
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-px bg-gray-200 text-center text-sm rounded-md overflow-hidden">
        {weekdays.map(day => (
          <div key={day} className="bg-gray-100 py-2 font-medium text-gray-600">
            {day}
          </div>
        ))}

        {totalCells.map((day, i) => {
          if (!day) return <div key={i} className="bg-white min-h-[100px] p-2" />;

          const isToday =
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear();

          const dayEvents = eventsForDay(day);

          return (
            <div
              key={i}
              className={`bg-white min-h-[100px] p-2 text-left text-xs flex flex-col justify-start ${
                isToday ? 'bg-blue-100 font-semibold' : ''
              }`}
            >
              <p className="font-bold">{day}</p>
              <ul className="mt-1 space-y-1 text-blue-600">
                {dayEvents.length > 0 ? (
                  dayEvents.map(event => (
                    <li key={event.id} className="truncate">
                      {event.title}
                    </li>
                  ))
                ) : (
                  <li className="text-gray-400">No events</li>
                )}
              </ul>
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
}
