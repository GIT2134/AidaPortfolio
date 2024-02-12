import React from "react";
import { Link } from "react-router-dom";

function SectionItem(props) {
  return (
    <>
      <li className="sectionsitemnew">
        <Link className="sectionsitemlink" to={props.path} target="_blank">
          <figure className="sectionsitempicwrap" data-category={props.label}>
            <img
              className="sectionsitemimg"
              alt="Travel Image"
              src={props.src}
            />
          </figure>
          <div className="sectionsiteminfo">
            <h5 className="sectionsitemtext">{props.text}</h5>{" "}
            <ul className="listofdesc">
              <li>{props.text2}</li>
              <li>{props.text3}</li>
            </ul>
            <button className="buttonapp">{props.buttontext1}</button>
            <button className="buttonapp"> {props.buttontext2}</button>
            <button className="buttonapp">{props.buttontext3}</button>
            <button className="buttonapp">{props.buttontext4}</button>
            <button className="buttonapp">{props.buttontext5}</button>
            <button className="buttonapp">{props.buttontext6}</button>
            <button className="buttonapp"> {props.buttontext7}</button>
            <button className="buttonapp">{props.buttontext8}</button>
          </div>
        </Link>
      </li>
    </>
  );
}

export default SectionItem;
