'use client';

import { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

const events = [
  { id: '4', title: 'LACD Annual Convention', date: '2025-10-10', link: '/register/event' },
  { id: '5', title: 'LACD Annual Convention', date: '2025-10-11', link: '/register/event' },
  { id: '6', title: 'LACD Annual Convention', date: '2025-10-12', link: '/register/event' },
];

export default function EventsPage() {
  const searchParams = useSearchParams();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDate, setFilterDate] = useState('');

  // Handle date parameter from URL and navigate to correct month
  useEffect(() => {
    const dateParam = searchParams.get('date');
    if (dateParam) {
      try {
        const targetDate = parseISO(dateParam);
        setCurrentMonth(new Date(targetDate.getFullYear(), targetDate.getMonth(), 1));
        setFilterDate(dateParam);
      } catch {
        console.error('Invalid date parameter:', dateParam);
      }
    }
  }, [searchParams]);

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

  // Filter events by search term and date filter
  const filteredEvents = events.filter(event => {
    const matchesSearch = !searchTerm || event.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilterDate = !filterDate || event.date === filterDate;

    return matchesSearch && matchesFilterDate;
  });

  // Helper to get events on a particular day
  const eventsForDay = (day: number) => {
    return filteredEvents.filter(event => {
      const eventDate = parseISO(event.date);
      return eventDate.getDate() === day && 
             eventDate.getMonth() === month && 
             eventDate.getFullYear() === year;
    });
  };

  // Check if a day is part of the LACD Annual Convention (multi-day event)
  const isLACDConventionDay = (day: number) => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    return month === 9 && year === 2025 && [10, 11, 12].includes(day); // October is month 9 (0-indexed)
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
            // Clear all filters when button is clicked
            setSearchTerm('');
            setFilterDate('');
          }}
          className="bg-blue-100 text-blue-800 flex items-center gap-2 px-4 py-2 rounded-md hover:bg-blue-200 transition-colors"
        >
          <Search size={16} />
          Clear Filters
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
          const isLACDConvention = isLACDConventionDay(day);

          return (
            <div
              key={i}
              className={`bg-white min-h-[100px] p-2 text-left text-xs flex flex-col justify-start ${
                isToday ? 'bg-blue-100 font-semibold' : ''
              } ${
                isLACDConvention ? 'bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300' : ''
              }`}
            >
              <p className={`font-bold ${isLACDConvention ? 'text-blue-700' : ''}`}>{day}</p>
              <ul className="mt-1 space-y-1 text-blue-600">
                {dayEvents.length > 0 ? (
                  dayEvents.map(event => (
                    <li key={event.id} className="truncate">
                      {event.link ? (
                        <a 
                          href={event.link} 
                          className="hover:text-blue-800 hover:underline cursor-pointer"
                          title={event.title}
                        >
                          {event.title}
                        </a>
                      ) : (
                        event.title
                      )}
                    </li>
                  ))
                ) : isLACDConvention ? (
                  <li className="text-blue-700 font-medium">LACD Annual Convention</li>
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
