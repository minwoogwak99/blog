import "./write.css";

function Write() {
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://cdn.pixabay.com/photo/2023/03/29/12/33/bird-7885354_960_720.jpg"
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label className="writeIcon" htmlFor="fileInput">
            <i className="fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Anything to say!"
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writePostButton">Post</button>
      </form>
    </div>
  );
}

export default Write;
