import React from "react";
import data from "../../assets/members";
const TeamMember = () => {
  return (
    <div className="lg:mx-56 lg:mt-8 mt-4">
      <div className="container mx-auto flex flex-wrap justify-center align-middle gap-10 pb-10">
        {data.map((member, i) => {
          return (
            <div
              key={i}
              className="flex flex-col justify-center items-center bg-white p-5 rounded-lg transition-shadow shadow-sm hover:shadow-md group"
            >
              <div className="w-[300px] h-[300px] overflow-hidden rounded-full">
                <img
                  className="transition-all group-hover:scale-110"
                  src={member.image}
                  alt={member.name}
                />
              </div>
              <div className="sm:text-xl lg:text-2xl text-medium mt-2 text-center">
                {member.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamMember;
