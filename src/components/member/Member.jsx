import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import MemberList from "./MemberList";

const Member = () => {
  const [getVoterUrl, setGetVoterUrl] = useState(
    "https://iotvotingsystem.onrender.com/getvoter"
  );
  const [voterData, setVoterData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await (await fetch(getVoterUrl)).json();
      setVoterData(data.data);
    };
    fetchData();
    const interval = setInterval(async () => {
      await fetchData();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const thStyle = "text-gray-900 font-bold px-6 py-4 whitespace-nowrap";
  return (
    <div className="container mx-auto">
      <div className=" bg-white rounded-lg overflow-x-auto mt-4">
        <table className="table-auto w-full">
          <thead className="border-b">
            <tr className="bg-white text-left">
              <th className={`${thStyle}`}>ID</th>
              <th className={`${thStyle}`}>Tag ID</th>
              <th className={`${thStyle}`}>Name</th>
              <th className={`${thStyle}`}>Email</th>
              <th className={`${thStyle}`}>Address</th>
              <th className={`${thStyle}`}>Voting Status</th>
            </tr>
          </thead>
          <tbody>
            {voterData.map((d, i) => (
              <MemberList data={d} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Member;
