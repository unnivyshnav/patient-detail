import { useState } from "react";
import "./nots.css";

export default function Notes() {
  const [note, setNote] = useState("");

  const handleChange = (e: any) => {
    setNote(e.target.value);
  };

  return (
    <div className="noteMain">
      <div className="noteHead">
        <div className="noteHeading">
          <h4>Notes</h4>
        </div>
        <div className="seeAll">
          <h5>See all</h5>
        </div>
      </div>
      <div className="noteArea">
        <div className="noteText">
          <textarea
            name=""
            id=""
            cols="30"
            rows="8"
            value={` ${note}`}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="noteButton">
          <button className="noteButtonbt">Save Note</button>
        </div>
      </div>
    </div>
  );
}
