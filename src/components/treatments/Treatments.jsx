// import { useState } from "react";
import "./treatments.css";

export default function Treatments({ appointment }) {
  console.log(["appointment"]["Upcoming Appointments"]);
  return (
    <div className="indvidualTreatment">
      <div className="treatmentWrapper">
        <div className="dateTime">
          <div className="date">{appointment.Date}</div>
          <div className="time">09:10-10:10</div>
        </div>
        <div className="treatmentType">
          <p>Treatment</p>
          <h4>Open access</h4>
        </div>
        <div className="doctorName">
          <p>dentist</p>
          <h4>Adom H</h4>
        </div>
        <div className="treatmentType">
          <p>nurse</p>
          <h4>Jessica</h4>
        </div>
        <div className="noteicon">
          <i class="bx bx-notepad"></i>
          <span>Note</span>
        </div>
      </div>
    </div>
  );
}
