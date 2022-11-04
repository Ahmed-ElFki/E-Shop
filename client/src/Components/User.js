import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import axios from "axios";

function User({ _id, fullName, email, accountType, subscriptionDate }) {
  async function deleteUser() {
    // eslint-disable-next-line
    const user = await axios.delete(`/users/delete/${_id}`);
  }

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        {_id}
      </TableCell>
      <TableCell align="right">{fullName}</TableCell>
      <TableCell align="right">{email}</TableCell>
      <TableCell align="right">{accountType}</TableCell>
      <TableCell align="right">{subscriptionDate}</TableCell>
      <TableCell align="right">
        {" "}
        <IconButton
          disabled={accountType === "Moderator" ? true : false}
          onClick={deleteUser}
        >
          <DeleteIcon
            sx={{
              fontSize: 30,
              color: "#FF6464",
            }}
          />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

export default User;
