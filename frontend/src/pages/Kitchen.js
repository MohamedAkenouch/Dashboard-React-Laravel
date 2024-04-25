import React from "react";
import SideBar from "../components/SideBar";

import {
  faUser,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { faBell, faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Kitchen() {
  return (
    <div className="w-[96%] text-[17px] m-auto mt-6 flex">
      <div>
        <SideBar />
      </div>
      <div className="w-full ml-6 text-[#033362] font-semibold">
        <div className="flex justify-between items-center w-full">
          <div className="px-2">Dashboard</div>
          <div className="px-2">
            <FontAwesomeIcon icon={faComment} />
          </div>
          <div className="px-2">
            <FontAwesomeIcon icon={faBell} />
          </div>
          <div className="w-[65%]">
            <input className="w-full max-w-full bg-[#fff] rounded-full h-8" />
          </div>
          <div className="px-2 min-w-fit">11:11 AM - August 21 ,2022</div>
          <div className="px-2">
            <span className="text-[#00AEEF]">
              <FontAwesomeIcon icon={faUser} />
            </span>{" "}
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        </div>
        <div class="max-w-2xl mx-auto">
          <div class="border-b border-gray-200 dark:border-gray-700 mb-4">
            <ul
              class="flex flex-wrap -mb-px"
              id="myTab"
              data-tabs-toggle="#myTabContent"
              role="tablist"
            >
              <li class="mr-2" role="presentation">
                <button
                  class="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300"
                  id="profile-tab"
                  data-tabs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Profile
                </button>
              </li>
              <li class="mr-2" role="presentation">
                <button
                  class="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300 active"
                  id="dashboard-tab"
                  data-tabs-target="#dashboard"
                  type="button"
                  role="tab"
                  aria-controls="dashboard"
                  aria-selected="true"
                >
                  Dashboard
                </button>
              </li>
              <li class="mr-2" role="presentation">
                <button
                  class="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300"
                  id="settings-tab"
                  data-tabs-target="#settings"
                  type="button"
                  role="tab"
                  aria-controls="settings"
                  aria-selected="false"
                >
                  Settings
                </button>
              </li>
              <li role="presentation">
                <button
                  class="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300"
                  id="contacts-tab"
                  data-tabs-target="#contacts"
                  type="button"
                  role="tab"
                  aria-controls="contacts"
                  aria-selected="false"
                >
                  Contacts
                </button>
              </li>
            </ul>
          </div>
          <div id="myTabContent">
            <div
              class="bg-gray-50 p-4 rounded-lg dark:bg-gray-800 hidden"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <p class="text-gray-500 dark:text-gray-400 text-sm">
                This is some placeholder content the{" "}
                <strong class="font-medium text-gray-800 dark:text-white">
                  Profile tab's associated content
                </strong>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </p>
            </div>
            <div
              class="bg-gray-50 p-4 rounded-lg dark:bg-gray-800"
              id="dashboard"
              role="tabpanel"
              aria-labelledby="dashboard-tab"
            >
              <p class="text-gray-500 dark:text-gray-400 text-sm">
                This is some placeholder content the{" "}
                <strong class="font-medium text-gray-800 dark:text-white">
                  Dashboard tab's associated content
                </strong>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </p>
            </div>
            <div
              class="bg-gray-50 p-4 rounded-lg dark:bg-gray-800 hidden"
              id="settings"
              role="tabpanel"
              aria-labelledby="settings-tab"
            >
              <p class="text-gray-500 dark:text-gray-400 text-sm">
                This is some placeholder content the{" "}
                <strong class="font-medium text-gray-800 dark:text-white">
                  Settings tab's associated content
                </strong>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </p>
            </div>
            <div
              class="bg-gray-50 p-4 rounded-lg dark:bg-gray-800 hidden"
              id="contacts"
              role="tabpanel"
              aria-labelledby="contacts-tab"
            >
              <p class="text-gray-500 dark:text-gray-400 text-sm">
                This is some placeholder content the{" "}
                <strong class="font-medium text-gray-800 dark:text-white">
                  Contacts tab's associated content
                </strong>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kitchen;
