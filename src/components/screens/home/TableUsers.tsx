import {Link} from "react-router-dom";
import {apiPath} from "../../../api/api.helpers";
import React from "react";
import {ITableUsers} from "../../../interfaces/common.interface";

const TableUsers = ({ data }: ITableUsers) => {
  return (
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Username</th>
        <th>Phone</th>
        <th>E-mail</th>
        <th>Website</th>
        <th>Posts</th>
        <th>Albums</th>
      </tr>
      </thead>
      <tbody>
      {data.filtered.map(user => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.phone}</td>
          <td>{user.email}</td>
          <td>{user.website}</td>
          <td><Link to={`/user/${user.id}/${apiPath.posts}`}>go</Link></td>
          <td><Link to={`/user/${user.id}/${apiPath.albums}`}>go</Link></td>
        </tr>
      ))}
      </tbody>
    </table>
  )
}

export default TableUsers
