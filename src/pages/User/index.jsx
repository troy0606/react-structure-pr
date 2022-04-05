import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getApiAllUserData } from "../../modules/user";

const mapStateToProps = (state) => {
  const { users } = state.userReducer;
  return {
    users,
  };
};

const mapDispatchToProps = {
  getApiAllUserData,
};

function User(props) {
  const [users, setUsers] = useState("");
  useEffect(() => {
    props.getApiAllUserData();
  }, []);
  return (
    <>
      <div>Users</div>
      <ul>
        {!props.users
          ? null
          : !props.users.length
          ? null
          : props.users.map((user, index) => {
              return (
                <li key={user.id}>
                  <p>{user.username}</p>
                  <p>{user.age}</p>
                  <p>{user.favourite_music_genre}</p>
                  <p>{user.preferred_programming_language}</p>
                  <p>{user.best_frontend_framework}</p>
                  <hr />
                </li>
              );
            })}
      </ul>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
