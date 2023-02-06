import React, { useState, useEffect } from "react";
import HeartImg from "@/assets/heart.png";
import EmptyHeartImg from "@/assets/empty-heart.png";

const HeartButton = ({ like, onClick }) => {
    return (
        <img className="heart-icon" src={like?HeartImg:EmptyHeartImg} onClick={onClick} />
    );
};

export default HeartButton;