import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import axios from "axios";

function PizzaComment({ commentId, userId, productId, comment }) {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    async function getUserData() {
      // eslint-disable-next-line
      const currentUser = await axios
        .post(`/users/${userId}`)
        .then((res) => setUserData(res.data.user));
    }
    getUserData();
  }, []);

  return (
    <Box
      sx={{
        width: "80vw",
        mb: "15px",
        display: "flex",
        justifyContent: "space-between",
        borderRadius: "5px",
        boxShadow: "3px 3px 3px black",
      }}
    >
      <div
        style={{
          width: "10vw",
          display: "flex",
          alignItems: "center",
          paddingLeft: "10px",
        }}
      >
        <Avatar
          alt={userData.fullName}
          src={userData.avatar}
          sx={{ width: 56, height: 56 }}
        />
        <span style={{ marginLeft: "20px", fontSize: 18 }}>
          {userData.fullName}
        </span>
      </div>

      <p style={{ fontSize: 18, paddingRight: "10px" }}>{comment}</p>
    </Box>
  );
}

export default PizzaComment;
