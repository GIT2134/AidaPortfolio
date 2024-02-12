import React from "react";
import "../../App.css";

export default function Education() {
  return (
    <>
      <div className="education">
        <h4> Concordia University, Montréal, QC</h4>
        <p>
          Bachelor of Computer Engineering <br />
          Jan 2018 - May 2023 <br />
        </p>

        <h4>
          <p className="relevantc">Relevant Courses </p>
        </h4>

        <p className="courses">
          <div className="row">
            <div className="columnone">
              <ul className="ccourse">
                <li>📱 Android Application Design</li>
                <li>🤖 Artificial Intelligence</li>
                <li>🌐 Communication Networks and Protocols</li>
                <li>💻 Computer Architecture and Design</li>
                <li>🖥️ Computer Organization and Software</li>
                <li>🧠 Data Structures and Algorithms</li>
                <li>📊 Databases</li>
                <li>🚁 Hovercraft Design</li>
                <li>💡 Impact of Technology on Society</li>
              </ul>
            </div>
            <div className="columntwo">
              <ul className="ccourse">
                <li>🔐 Information Systems Security</li>
                <li>⌛ Introduction to Real‑Time Systems</li>
                <li>🖥️ Operating Systems</li>
                <li>🖨️ Printer Switch Capstone Design</li>
                <li>💻 Programming Methodology I & II</li>
                <li>🔄 Software Process</li>
                <li>🔍 Software Requirements and Specifications</li>
                <li>📝 Technical Writing and Communication</li>
                <li>💼 Engineering Management Principles and Economics</li>
              </ul>
            </div>
          </div>
        </p>
      </div>
    </>
  );
}
