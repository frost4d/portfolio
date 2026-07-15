import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

const LiveVisitors = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:5001");

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setCount(data.activeUsers);   // ✅ updates with global count
    };

    return () => ws.close();
  }, []);

  return (
    <Box sx={{
      position: "fixed", bottom: 20, right: 20,
      display: "inline-flex", alignItems: "center", gap: 1,
      px: 2, py: 1, borderRadius: "30px",
      background: "linear-gradient(90deg,#38bdf8,#6366f1)",
      boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
      color: "#fff", fontWeight: "bold", fontSize: "0.9rem", zIndex: 1500,
    }}>
      <CircleIcon sx={{ color: "#22c55e", fontSize: "1rem" }} />
      <Typography sx={{ fontWeight: 600 }}>
        {count} Live Visitors
      </Typography>
    </Box>
  );
};

export default LiveVisitors;




// import React, { useEffect, useState } from "react";
// import { Box, Typography } from "@mui/material";
// import CircleIcon from "@mui/icons-material/Circle";

// const LiveVisitors = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const fetchVisitors = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/live-visitors");
//         const data = await res.json();
//         setCount(data.activeUsers);
//       } catch (err) {
//         console.error("Error fetching visitors:", err);
//       }
//     };

//     fetchVisitors();

//     // Refresh every 10 seconds
//     const interval = setInterval(fetchVisitors, 10000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <Box
//       sx={{
//         position: "fixed",
//         bottom: 20,
//         right: 20,
//         display: "inline-flex",
//         alignItems: "center",
//         gap: 1,
//         px: 2,
//         py: 1,
//         borderRadius: "30px",
//         background: "linear-gradient(90deg,#38bdf8,#6366f1)",
//         boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
//         color: "#fff",
//         fontWeight: "bold",
//         fontSize: "0.9rem",
//         zIndex: 1500,
//       }}
//     >
//       <CircleIcon sx={{ color: "#22c55e", fontSize: "1rem" }} />
//       <Typography sx={{ fontWeight: 600 }}>
//         {count} Live Visitors
//       </Typography>
//     </Box>
//   );
// };

// export default LiveVisitors;
