import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("https://fire-news-server.vercel.app/category")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div>
      <p>All Category : {category.length}</p>
      {category.map((item) => (
        <p key={item.id}>
          <Link to={`category/${item.id}`}>{item.name}</Link>
        </p>
      ))}
    </div>
  );
};

export default LeftSideNav;
