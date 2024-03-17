import React, { useState, useEffect } from 'react';

const Draw = () => {
  const [countdown, setCountdown] = useState(900); // 15 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prevCountdown => {
        if (prevCountdown > 0) {
          return prevCountdown - 1;
        } else {
          return 900; // Reset to 15 minutes when countdown reaches 0
        }
      });
    }, 1000); // Update every second

    return () => clearInterval(timer); // Clean up interval on component unmount
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <div className="col-md-3">
          <form action="/series" className="m-0">
            <input type="hidden" name="id" value="showSeriesRecords" />
            <input type="hidden" name="date" value="03/17/2024" />
            <select className="form-select ml-4 bg bg-secondary py-2" name="series">
              <option value="0">--Select Row--</option>
              <option value="0">00</option>
              <option value="1">10</option>
              <option value="2">20</option>
              <option value="3">30</option>
              <option value="4">40</option>
              <option value="5">50</option>
              <option value="6">60</option>
              <option value="7">70</option>
              <option value="8">80</option>
              <option value="9">90</option>
            </select>
            <input className="btn btn-secondary mx-2 px-3" type="submit" value="GO" />
          </form>
        </div>
        <div className="col-md-9 d-flex justify-content-end align-items-center">
          <strong className="text-white fs-5">Next Draw In: {formatTime(countdown)} minutes</strong>
        </div>
      </div>
    </nav>
  );
};

export default Draw;
