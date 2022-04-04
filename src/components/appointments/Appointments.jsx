import { useState } from "react";
import Treatments from "../treatments/Treatments";
import "./appointments.css";

export default function Appointments({ appointment }) {
  const [upcoming, setUpcoming] = useState(false);
  const [past, setPast] = useState(false);
  const [reports, setReports] = useState(false);
  console.log(upcoming);
  const selectUpcoming = () => {
    setUpcoming(true);
    setPast(false);
    setReports(false);
  };
  const selectPast = () => {
    setUpcoming(false);
    setPast(true);
    setReports(false);
  };
  const selectReports = () => {
    setUpcoming(false);
    setPast(false);
    setReports(true);
  };
  return (
    <div className="appointments">
      <div className="selectBar">
        <div
          className={
            upcoming ? "selectedONe selectBarOptions" : "selectBarOptions"
          }
          onClick={selectUpcoming}
        >
          Upcoming appointments
        </div>
        <div
          className={past ? "selectedONe selectBarOptions" : "selectBarOptions"}
          onClick={selectPast}
        >
          Past appointments
        </div>
        <div
          className={
            reports ? "selectedONe selectBarOptions" : "selectBarOptions"
          }
          onClick={selectReports}
        >
          Medical Reports
        </div>
      </div>

      <div className="treatments">
        <div className="treatmentsHeader">
          <div className="treatmentName">Root canal Treatment</div>

          <div className="dropdownButton">
            <i class="bx bx-chevron-down"></i>
            <span>Show Previous Treatment</span>
          </div>
        </div>

        <div className="treatmentList">
          {appointment.map((c, key) => (
            <div className="makeRow">
              <div className="sideLine">
                <div className="line">
                  <div className="dots">
                    <div>g</div>
                  </div>
                </div>
              </div>
              <div className="tretmentrows">
                <Treatments key={key} appointment={c} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
