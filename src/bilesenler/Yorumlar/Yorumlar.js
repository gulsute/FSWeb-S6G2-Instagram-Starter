import React from "react";
import Yorum from "./Yorum";
import "./Yorumlar.css";

const Yorumlar = (props) => {
  // 🔥 Bu bileşenin parentının aşağıdaki propları düzgün gönderdiğinden emin olun.
  const { yorumlar } = props;

  return (
    <div>
      {yorumlar.map((yorum, i) => {
        return <Yorum yorum={yorum} key={i} />;
      })}
    </div>
  );
};

export default Yorumlar;
