import React from "react";
import {
    faArrowLeft
  } from "@fortawesome/free-solid-svg-icons";
  import { faBell, faComment } from "@fortawesome/free-regular-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/headerSecond.module.css";
import { Link } from "react-router-dom";

function HeaderSecond({title}) {
    return (
        <header className="flex justify-between items-center w-full">
            <div className={styles.headerLeft + " inline float-left"}>
                <Link to="/">
                    <FontAwesomeIcon icon={faArrowLeft} className={styles.arrowLeft}/>
                </Link>
                <span className="ml-2">{title}</span>
            </div>

            <div className={styles.headerRight + " inline float-right"}>
                <span className="font-semibold">Search</span>
                <input className="mx-2 py-1 px-2 rounded-full border border-[#0388cc]" />
                <button className="bg-[#0388cc] hover:bg-[#0388cc] text-white py-1 px-3 rounded-full items-center">
                    Search
                </button>
            </div>
            
        </header>
    );
}

export default HeaderSecond;