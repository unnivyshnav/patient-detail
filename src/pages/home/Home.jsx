import { useEffect, useState } from "react";
import Head from "../../components/head/Head";
import "./home.css";
// import { Link } from "react-router-dom";
import PatientProfileCard from "../../components/patientProfileCard/PatientProfileCard";
import axios from "axios";
import Appointments from "../../components/appointments/Appointments";
import Notes from "../../components/notes/Notes";
import Files from "../../components/files/Files";

export default function Sidebar() {
  const staticData = {};
  const [patient, setPatient] = useState([staticData]);
  const [close, setClose] = useState(true);
  const [collapse, setCollapse] = useState(true);
  const [appointment, setAppointment] = useState([staticData]);
  const [files, setFiles] = useState([staticData]);
  const [drDetails, setDrDetails] = useState([staticData]);
  useEffect(() => {
    const fetchCourses = async () => {
      const res = await axios.get(
        "https://619f39821ac52a0017ba467e.mockapi.io/patientDetails"
      );
      setPatient(res.data);
      console.log(patient);
    };
    fetchCourses();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    const fetchCourses = async () => {
      const res = await axios.get(
        "https://619f39821ac52a0017ba467e.mockapi.io/appointment_details"
      );
      setAppointment(res.data);
      console.log(appointment);
    };
    fetchCourses();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    const fetchCourses = async () => {
      const res = await axios.get(
        "https://mernchatappp.herokuapp.com/api/files"
      );
      setFiles(res.data);
      console.log(files);
    };
    fetchCourses();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    const fetchCourses = async () => {
      const res = await axios.get(
        "https://619f39821ac52a0017ba467e.mockapi.io/DoctorDetails"
      );
      setDrDetails(res.data);
      // console.log(drDetails);
    };
    fetchCourses();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const toggle = (e) => {
    setClose(!close);
  };
  const Setcollapse = (e) => {
    setCollapse(!collapse);
    // console.log(collapse);
  };

  return (
    <div className="sidebarwrap">
      {" "}
      <nav className={close ? "close sidebar" : "sidebar"}>
        <header>
          <div class="image-text">
            <span class="image">
              {" "}
              <i class="bx bxs-institution logo"></i>
            </span>

            <div class="text logo-text">
              <span class="name">Zendenta</span>
              <span class="profession">Cabut gigi tanpa</span>
            </div>
          </div>

          <i class="bx bx-list-ul toggle" onClick={toggle}></i>
        </header>

        <div class="menu-bar">
          <div class="menu">
            {/* <li class="search-box">
              <i class="bx bx-search icon"></i>
              <input type="text" placeholder="Search..." />
            </li> */}

            <ul className="menu-links">
              <li className="nav-link">
                <i class="bx bx-home-alt icon"></i>
                <span class="text nav-text">Overview</span>
              </li>

              <li class="nav-link">
                <i class="bx bx-bar-chart-alt-2 icon"></i>
                <span class="text nav-text">Calender</span>
              </li>

              <li class="nav-link">
                <i class="bx bx-bell icon"></i>
                <span class="text nav-text">Patient List</span>
              </li>

              <li class="nav-link">
                <i class="bx bx-pie-chart-alt icon"></i>
                <span class="text nav-text">Messages</span>
              </li>

              <li class="nav-link">
                <i class="bx bx-heart icon"></i>
                <span class="text nav-text">Payment Information</span>
              </li>

              <li class="nav-link">
                <i class="bx bx-wallet icon"></i>
                <span class="text nav-text">Settings</span>
              </li>
            </ul>
          </div>

          <div class="bottom-content">
            <li class="">
              <i class="bx bx-log-out icon"></i>
              <span class="text nav-text">Help ?</span>
            </li>

            <li>
              <div class="sun-moon">
                <img
                  className="profilePhoto"
                  src="https://as1.ftcdn.net/v2/jpg/02/90/56/38/1000_F_290563830_MCl0UobSKqqgV7wE8KeSOsablqJIUNCg.jpg"
                  alt=""
                />
              </div>
              <span class="mode-text text">{drDetails[0].name}</span>
              <span className="">
                <i
                  class="bx bx-chevron-down arrowDown"
                  onClick={Setcollapse}
                ></i>{" "}
              </span>
            </li>
            <div className={!collapse ? "collapse drbar" : "drbar"}>
              <div className="drdetailsRelative">
                <div className="drdetailsAbsolute">
                  <div>
                    <h6>specification</h6>
                  </div>
                  <div>
                    <h5>{drDetails[0].specification}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section class="home">
        <Head patient={patient[0]} />
        <div className="patientDatas">
          <div className="patientdatasLeft">
            <div className="patientProfile">
              <PatientProfileCard patient={patient[0]} />
            </div>
            <div className="patientAppointments">
              <Appointments appointment={appointment} />
            </div>
          </div>
          <div className="patientdatasRight">
            <div className="notes">
              <Notes />
            </div>
            <div className="files">
              {" "}
              <Files files={files} />{" "}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
