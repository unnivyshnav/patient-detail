import "./patientProfileCard.css";

export default function patientProfileCard({ patient }) {
  return (
    <div className="patientProfileCard">
      <div className="profileLeft">
        <div className="profileImage">
          <img
            src="https://pluralsight.imgix.net/author/lg/7265d297-53d8-44a1-a49c-8f99d777b866.jpeg"
            alt=""
          />
        </div>
        <div className="ProfileName">
          <h3>{patient.name}</h3>
        </div>
        <div className="profileEmail">{patient.email}</div>
        <div className="profileHistory">
          <div className="past">
            <div className="count">{patient.Upcoming}</div>
            <div className="countText">Past</div>
          </div>

          <div className="upcoming">
            <div className="count">{patient.Past}</div>
            <div className="countText">Upcoming</div>
          </div>
        </div>
        <div>
          <button className="profileButton">Send Message</button>
        </div>
      </div>
      <div className="profileRight">
        <div className="profileDatatext">
          <h5 className="dataHead">Gender</h5>
          <p className="dataContent">{patient.Gender}</p>
        </div>
        <div className="profileDatatext">
          <h5 className="dataHead">Birthday</h5>
          <p className="dataContent">{patient.Birthday}</p>
        </div>
        <div className="profileDatatext">
          <h5 className="dataHead">Phone Number</h5>
          <p className="dataContent">{patient["Phone Number"]}</p>
        </div>

        <div className="profileDatatext">
          <h5 className="dataHead">Street Address</h5>
          <p className="dataContent">{patient["Street Address"]}</p>
        </div>
        <div className="profileDatatext">
          <h5 className="dataHead">City</h5>
          <p className="dataContent">Cilacap</p>
        </div>
        <div className="profileDatatext">
          <h5 className="dataHead">Zip Code</h5>
          <p className="dataContent">{patient["ZIP Code"]}</p>
        </div>

        <div className="profileDatatext">
          <h5 className="dataHead">Member Status</h5>
          <p className="dataContent">{patient["Membership Status"]}</p>
        </div>
        <div className="profileDatatext">
          <h5 className="dataHead">Registered Date</h5>
          <p className="dataContent">{patient["Register Date"]}</p>
        </div>
      </div>
    </div>
  );
}
