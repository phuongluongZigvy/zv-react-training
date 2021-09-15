import React from "react";

export default function Info(props) {
  const { user } = props;
  console.log("page info", user);
  return (
    <div>
      <p>fullName: {user.fullName}</p>
      <p>email: {user.email}</p>
      <p>id: {user.id}</p>
      <p>role: {user.role}</p>
    </div>
  );
}
