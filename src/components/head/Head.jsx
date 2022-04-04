import "./head.css";

export default function Head({ patient }) {
  return (
    <div className="mainHeadWrapper">
      <div className="headWrapper">
        <div className="left">
          <div className="headitem">
            <i class="bx bx-user headIcons"></i>
          </div>
          <div className="headitem">{patient.name} </div>
        </div>
        <div className="right">
          <div class=" headitem">
            <div className="search-box">
              <i class="bx bx-search headIcon"></i>
              <input type="text" placeholder="Search..." />
            </div>
          </div>
          <div className="headitem">
            <i class="bx bxs-plus-circle headIcons"></i>
          </div>
          <div className="headitem">
            <i class="bx bx-bell headIcons edit"></i>
          </div>
        </div>
      </div>
      <div className="headWrapper1">
        <div className="left">
          <div className="headitem patientListText textblue">Patient List </div>
          <div className="headitem">
            <i class="bx bx-chevron-right"></i>
          </div>
          <div className="headitem patientListText">{patient.name} </div>
        </div>
        <div className="right">
          <div class=" headitem">
            <div className="print-box edit">
              <i class="bx bxs-printer "></i>
            </div>
          </div>
          <div className="headitem">
            <div className="editPatient">
              <i class="bx bx-edit edit"></i>
              <div className="editText">Edit patient</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
