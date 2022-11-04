import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

import { delFromCart, addOne, delOne } from "../Actions/CartActions";

function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const loggedUserID = localStorage.getItem("userId") || null;
  const navigate = useNavigate();

  if (!loggedUserID) navigate("/");

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Unit Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">Action(s)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems.map((item, key) => (
            <TableRow
              key={key}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item._id}
              </TableCell>
              <TableCell align="right">{item.name}</TableCell>
              <TableCell align="right">{item.price}</TableCell>
              <TableCell align="right">
                {" "}
                <IconButton onClick={() => dispatch(delOne(item._id))}>
                  <RemoveCircleIcon sx={{ fontSize: 25, color: "red" }} />
                </IconButton>
                {item.qte}{" "}
                <IconButton onClick={() => dispatch(addOne(item._id))}>
                  <AddCircleIcon sx={{ fontSize: 25, color: "red" }} />
                </IconButton>
              </TableCell>
              <TableCell align="right">{item.qte * item.price}</TableCell>
              <TableCell align="right">
                {" "}
                <IconButton onClick={() => dispatch(delFromCart(item._id))}>
                  <DeleteIcon sx={{ fontSize: 30, color: "red" }} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Cart;
