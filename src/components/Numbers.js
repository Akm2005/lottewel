import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaTimes } from 'react-icons/fa'; // Import close icon from React Icons

const Numbers = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false);
    };

    setResponsiveness();

    window.addEventListener("resize", setResponsiveness);

    return () => {
      window.removeEventListener("resize", setResponsiveness);
    };
  }, []);

  // Function to handle date selection
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Function to allow only previous five days
  const isPastDate = (date) => {
    const today = new Date();
    const fiveDaysAgo = new Date(today);
    fiveDaysAgo.setDate(fiveDaysAgo.getDate() - 5);
    return date <= today && date >= fiveDaysAgo;
  };

  // Function to toggle form visibility
  const toggleFormVisibility = () => {
    setFormVisible(!formVisible);
  };

  return (
    <header className="bg-light">
      <div className="container py-3">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="/Controller">Lottewel</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleFormVisibility}>
            {/* Toggle between hamburger and close icon */}
            {formVisible ? <FaTimes /> : <span className="navbar-toggler-icon"></span>}
          </button>
          <div className={`collapse navbar-collapse ${formVisible ? 'show' : ''} ${isMobile ? 'mobile-collapse' : ''}`} id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a href="/?number=single" className="nav-link">Single Numbers</a>
              </li>
              <li className="nav-item">
                <a href="/?number=double" className="nav-link">Double Numbers</a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">Four Numbers</a>
              </li>
            </ul>
            <form action="/Controllers" method="post" className="d-flex">
              <input type="hidden" name="_token" value="lGqs2hHNgKWKaAsOpzTYyl07RuMSNflD9MUFxufq" />
              <input type="hidden" name="id" value="showAllRecords" />
              <div className={`input-group ${isMobile ? 'mobile-form' : ''}`}>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="yyyy-MM-dd"
                  maxDate={new Date()}
                  minDate={new Date(new Date().setDate(new Date().getDate() - 5))}
                  filterDate={isPastDate}
                  className={`form-control ${isMobile ? 'mobile-date-picker' : ''}`}
                />
                <button className={`btn btn-dark  ${isMobile ? 'mt-3 w-100' : 'ms-2 mx-2'}`} type="submit">GO</button>
              </div>
            </form>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Numbers;
