import "./post.css";

function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://cdn.pixabay.com/photo/2014/12/16/22/25/sunset-570881_960_720.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCategories">
          <span className="postCategory">Music</span>
          <span className="postCategory">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>

      <div className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At atque
        tempore reiciendis molestiae maxime labore blanditiis voluptatibus
        sapiente. Provident error est vel id rem magnam delectus perferendis.
        Vel, adipisci odio!Lorem ipsum dolor sit amet consectetur adipisicing
        elit. At atque tempore reiciendis molestiae maxime labore blanditiis
        voluptatibus sapiente. Provident error est vel id rem magnam delectus
        perferendis. Vel, adipisci odio!Lorem ipsum dolor sit amet consectetur
        adipisicing elit. At atque tempore reiciendis molestiae maxime labore
        blanditiis voluptatibus sapiente. Provident error est vel id rem magnam
        delectus perferendis. Vel, adipisci odio!Lorem ipsum dolor sit amet
        consectetur adipisicing elit. At atque tempore reiciendis molestiae
        maxime labore blanditiis voluptatibus sapiente. Provident error est vel
        id rem magnam delectus perferendis. Vel, adipisci odio!
      </div>
    </div>
  );
}

export default Post;
