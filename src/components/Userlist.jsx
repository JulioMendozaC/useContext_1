import {useEffect, useContext} from "react";
import userContext from "../context/user/userContext";

const Userlist = () => {
  const {users, getUsers, getProfile} = useContext(userContext);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="list-group list-group-numbered">
      {users.map((user) => (
        <li
          className="list-group-item d-flex justify-content-between align-items-start" key={user.id}>
          <div className="ms-2 me-auto">
            <div className="fw-bold"><a href="#!" className="list-grup-item list-group-item-action"
            onClick={() => getProfile(user.id) }><p>{`${user.first_name} ${user.last_name}`}</p></a></div>
            {`${user.email}`}
          </div>
          <span><img src={user.avatar} alt=""  className="img-fluid mr-4 rounded-circle" width="60%"/></span>
        </li>
      ))}
    </div>
  )
};

export default Userlist;
