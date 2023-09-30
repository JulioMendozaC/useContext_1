import {useContext} from "react";
import userContext from "../context/user/userContext";
import "../styles/porfile.css";

const Profile = () => {
  const {slectusers} = useContext(userContext);

  return (
    <>
      {slectusers ? (
        <div>
          <div className="col-md-10 m-5">
            <div className="card profile-card-1">
              <img
                src="https://images.pexels.com/photos/946351/pexels-photo-946351.jpeg?w=500&h=650&auto=compress&cs=tinysrg"
                alt="profile-sample1"
                className="background"
              />
              <img
                src={slectusers.avatar}
                alt="profile-image"
                className="profile"
              />
              <div className="card-content">
                <h2 className="text-white">
                {`${slectusers.first_name} ${slectusers.last_name}`}<small>{slectusers.email}</small>
                </h2>
                <div className="icon-block">
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    {" "}
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    {" "}
                    <i className="fa fa-google-plus"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>Usuario no sleccionado</h1>
      )}
    </>
  );
};

export default Profile;
