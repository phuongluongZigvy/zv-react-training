import React, { useEffect, useState } from "react";
import { getUsers } from "../api";
import { useSelector } from "react-redux";
import { GetUsers } from "../actions/user";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Users() {
  const headers = useSelector((state) => state.user.accessToken);
  const dispatch = useDispatch();

  useEffect(() => {
    getUsers({ headers: { authorization: "Bearer " + headers } }).then(
      (data) => {
        console.log(data);
        const action = GetUsers(data.users);
        dispatch(action);
      }
    );
  }, [dispatch, headers]);

  const userList = useSelector((state) => state.user.users);
  const isAdmin = useSelector((state) => state.user.isAdmin);
  const [userActive, setUserActive] = useState();

  return (
    <div>
      {isAdmin ? (
        <div>
          <div className="col-1">
            {userList.map((user) => {
              return (
                <Link
                  className="user_link"
                  to={`/app/users/${user.id}`}
                  onClick={() => {
                    setUserActive(user.id);
                  }}
                >
                  {user.fullName}
                </Link>
              );
            })}
          </div>
          {(userList.length > 0) &
            (userActive === null ? (
              <p>Please choose user to view user detail</p>
            ) : (
              <div className="col-2">
                {userList.find((user) => {
                  if (user.id === userActive);
                  return (
                    <div>
                      <p>fullName: {user.fullName}</p>
                      <p>email: {user.email}</p>
                      <p>password: {user.email}</p>
                      <p>id: {user.email}</p>
                      <p>role: {user.email}</p>
                    </div>
                  );
                })}
              </div>
            ))}
        </div>
      ) : (
        <p>You have no permission to perform this action</p>
      )}
    </div>
  );
}
