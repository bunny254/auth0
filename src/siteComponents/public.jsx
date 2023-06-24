import React, { useState, useEffect } from "react";
import api from "../api/data";

const Public = () => {
  const [pData, setPData] = useState([]);

  useEffect(() => {
    const fetchPublicData = async () => {
      try {
        const res = await api.get("/public");
        //console.log(res.data);
        setPData(res.data)
      } catch (err) {
        if (err.res) {
          console.log(err.res.data);
          console.log(err.res.status);
          console.log(err.res.headers);
        }else{
          console.log(`Error: ${err.message}`);
        }
      }
    }
    fetchPublicData();
  }, []);
  return (
    <div>
      <h1 className="text-xl mt-4 ml-4">{pData}</h1>
    </div>
  );
};

export default Public;
