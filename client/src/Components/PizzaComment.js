import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
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
      component="div"
      sx={{
        width: "80vw",
        mb: "15px",
      }}
    >
      <p style={{ fontSize: "25px", padding: "10px 0px", margin: "0" }}>
        {userData.fullName} : {comment}
      </p>
    </Box>
  );
}

export default PizzaComment;
