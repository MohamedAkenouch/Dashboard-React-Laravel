import React from "react";
import {
    faArrowLeft
  } from "@fortawesome/free-solid-svg-icons";
  import { faBell, faComment } from "@fortawesome/free-regular-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/headerSecond.module.css";
import { Link } from "react-router-dom";

function HeaderThird({title, path}) {
    return (
        <header className="flex justify-between items-center w-full">
            <div className={styles.headerLeft + " inline float-left"}>
                <Link to={path}>
                    <FontAwesomeIcon icon={faArrowLeft} className={styles.arrowLeft}/>
                </Link>
                <span className="ml-2">{title}</span>
            </div>
            
        </header>
    );
}

export default HeaderThird;