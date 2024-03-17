import React, { useState } from 'react';
import data from './Data'; // Assuming Data.js exports the tableData as 'data'

const Main = ({ currentDateTime }) => {
  const [currentTime] = useState(currentDateTime || new Date());

  return (
    <div className="col-lg-12 col-md-12 col-sm-12">
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-12 text-center">
              {currentTime.toLocaleDateString()} <br className="d-sm-none" /> {currentTime.toLocaleTimeString()}
            </div>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table">
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="text-center" style={{ fontSize: '120%', fontWeight: 'bold' }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Main;
