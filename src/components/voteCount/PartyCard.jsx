import React from "react";

const PartyCard = ({ party, total }) => {
  const percent = Math.floor((party.vote / total) * 100);
  return (
    <div className="p-4 border shadow-sm min-w-[42rem]">
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
  );
};

export default PartyCard;
