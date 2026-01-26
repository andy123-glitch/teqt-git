export default function Profile({ picture, name }) {
  return (
    <div className="profile">
      <h3>{name}</h3>
      <img
        src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg"
        alt=""
      />
    </div>
  );
}
