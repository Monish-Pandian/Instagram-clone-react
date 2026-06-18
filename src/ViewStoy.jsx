import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function ViewStoy() {
  const { id, tot } = useParams();
  const [story, setStory] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/story/" + id)
      .then((res) => res.json()) 
      .then((data) => setStory(data))
      .catch((err) => console.log(err));
  }, [id]);

  if (id > tot || id < 1) {
    navigate("/");
  }

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      {story && (
        <>
          <Link to={`/story/${Number(id) - 1}/${tot}`}>
            <i className="bi bi-arrow-left-circle-fill fs-1 m-5"></i>
          </Link>

          <div className="position-relative d-inline-block">
           
            <img
              className="story_pic rounded border border-1 "
              style={{ width: "350px", height: "600px", objectFit: "contain", borderRadius: "15px" }}
              src={`http://localhost:5173/${story.imageUrl}`}
              alt=""
            />

            <img
              src={`http://localhost:5173/${story.userAvatar}`}
              alt=""
              className="rounded-circle border border-1  position-absolute"
              style={{
                width: "70px",
                height: "70px",
                top: "15px",
                left: "15px",
                objectFit: "cover",
              }}
            />
            <span
              className="position-absolute "
              style={{
                top: "30px",
                left: "100px",
                 textShadow: "0 0 5px black",
              }}
            >
              {story.username}
            </span>
          </div>

          <Link to={`/story/${Number(id) + 1}/${tot}`}>
            <i className="bi bi-arrow-right-circle-fill fs-1 m-5"></i>
          </Link>
        </>
      )}
    </div>
  );
}

export default ViewStoy;
