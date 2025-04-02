import React, { use } from "react";
import "./Vidoes.css";

const Vidoes = ({ videoesFetch, verified }) => {
  const videoes = use(videoesFetch);
  //   console.log(videoes.videos);
  return (
    <div className="card-container">
      {videoes.videos.map((video) => (
        <DisplayVideo verified={verified} video={video}></DisplayVideo>
      ))}
    </div>
  );
};

function DisplayVideo({ verified, video }) {
  console.log(video.others.views);

  const {thumbnail,title} = video;
const {profile_name,profile_picture}= video.authors[0]
const {views}=video.others
//   const {profile_picture,profile_name}= video.authors

  return (
    <div>
      <div className="cart">
        <div class="card bg-base-100 shadow-sm">
          <figure>
            <img className="img"
              src={thumbnail}
              alt="Shoes"
            />
          </figure>

          <div className="cart-text-container">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2 avater-img">
                <img src={profile_picture}/>
              </div>
            </div>

            <div>
              <h1 className="title">
              {title}
              </h1>
              <div className="verified-flex">
                <h4> {profile_name} </h4>
                <img src={verified} alt="" />
              </div>
              <span>{views} views</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vidoes;
