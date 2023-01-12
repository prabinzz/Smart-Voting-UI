import React from "react";

const PartyCard = ({ party, total }) => {
  const percent = Math.floor((party.vote / total) * 100);
  return (
    <div className="p-4 border shadow-md md:min-w-[42rem] rounded-md bg-white flex flex-row items-center">
      <div className="logo relative right-0 bottom-0">
        <img className=" w-36 p-2 border" src={party.image} alt={party.party} />
      </div>
      <div className="ml-4 lg:ml-10">
        <div className="id mt-2">
          <b>ID:</b> {party.id}
        </div>
        <div className="name mt-2">
          <b>Name:</b> {party.name}
        </div>
        <div className="party mt-2">
          <b>Party:</b> {party.party}
        </div>
        <div className="vote mt-2">
          <b>Vote Count</b>: {party.vote}
        </div>
      </div>
    </div>
  );
};

export default PartyCard;
