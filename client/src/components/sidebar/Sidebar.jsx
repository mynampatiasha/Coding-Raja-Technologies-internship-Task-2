import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";

import { Context } from "../../context/Context";

import "./sidebar.css";

export default function Sidebar() {
  const { user} = useContext(Context);
  const PF = "http://localhost:5000/images/"
  const [cats, setCats] = useState([]);


  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle"><h2>PROFILE</h2></span>
        <img className="sidebarImg" src={PF+user.profilePic} alt="" />
         <h2 className="sidebarText">
          {user.username}
          </h2>
          <h2 className="sidebarText">
            {user.email}
          </h2>
          
         
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle"><h2>CATEGORIES</h2></span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle"><h2>FOLLOW US</h2></span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}