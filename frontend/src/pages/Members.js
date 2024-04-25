import React from "react";

function Members({ setMembers, member, members, text }) {
  const deleteHandler = () => {
    setMembers(members.filter((mem) => mem.id !== member.id));
  };
  return (
    <div>
      <div className="flex items-center">
        <p className="w-full mt-4 font-semibold text-grey-darkest">{text}</p>
        <button
          onClick={deleteHandler}
          className="w-min px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-400 focus:outline-none focus:shadow-outline"
        >
          Supprimer
        </button>
      </div>
    </div>
  );
}

export default Members;
