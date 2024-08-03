import React, { useState, useEffect } from "react";
import UserProfile from "./common/UserProfile";
import AxiosService from "../utils/AxiosServise";
import ApiRoutes from "../utils/ApiRoutes";

function Home() {
  let [data, setData] = useState([]);
  let getData = async () => {
    try {
      let response = await AxiosService.get(ApiRoutes.BLOG_APP.path);
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      toast(error.response.message || "Internal Server Error");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="full-box">
      <div className="cards-container">
        {data.map((e) => {
          return (
            <div key={e.id}>
              <UserProfile
                id={e.id}
                name={e.name}
                username={e.username}
                email={e.email}
                phone={e.phone}
                website={e.website}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
