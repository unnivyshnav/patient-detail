import "./files.css";

export default function Files({ files }) {
  console.log(files);

  return (
    <div className="filesMain">
      <div className="filesHead">
        <div className="filesHeading">
          <h4>Files/Documents</h4>
        </div>
        <div className="filesIcon">
          <i class="bx bxs-file-plus"></i>
          <span>Add Files</span>
        </div>
      </div>
      {files.map((c, key) => (
        <div className="fileRow" key={key}>
          <div className="fileRowLeft">
            <div className="filedIcon">
              <i class="bx bx-file"></i>
              <span className="fileName">{c.file}</span>
            </div>
          </div>
          <div className="fileRowRight">
            <div className="fileDeleIcon">
              <i class="bx bx-folder-minus"></i>
              <span className="downloadIcon">
                <i class="bx bx-download"></i>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
