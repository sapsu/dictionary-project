import React from "react";
import "./Phonetic.css";
import { Ear } from "react-bootstrap-icons";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        <Ear color="#3B0944" size={17} className="mb-1" />
      </a>
      <span className="phonetic">{props.phonetic.text}</span>
    </div>
  );
}
