import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import axios from "axios";

import User from "./User";

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function getAllUsers() {
      // eslint-disable-next-line
      const users = await axios
        .post("/users/all")
        .then((res) => setUsers(res.data.usersList));
    }
    getAllUsers();
  }, [users]);

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Full Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Account Type</TableCell>
            <TableCell align="right">Subscription Date</TableCell>
            <TableCell align="right">Action(s)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, key) => {
            return (
              <User
                key={key}
                _id={user._id}
                fullName={user.fullName}
                email={user.email}
                accountType={user.accountType}
                subscriptionDate={user.subscriptionDate}
              />
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Users;
