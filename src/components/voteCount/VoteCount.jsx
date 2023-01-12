import React from "react";
import Title from "../others/Title";
import { useEffect } from "react";
import { useState } from "react";
import PartyCard from "./PartyCard";
import BarChart from "./BarChart";

const VoteCount = () => {
  const [getPartyUrl, setGetPartyUrl] = useState(
    "https://iotvotingsystem.onrender.com/getparty"
  );
  const [partyData, setPartyData] = useState([]);
  const [partyList, setPartyList] = useState([]);
  const [totalVote, setTotalVote] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const data = await (await fetch(getPartyUrl)).json();
      setPartyData(data.data);
      setPartyList(data.partyList);
      setTotalVote(data.total);
    };
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto pb-8">
      <Title title="Vote Count" />
      <BarChart partyData={partyData} partyList={partyList} total={totalVote} />
      <div className="text-2xl text-center mt-12">Candidate List</div>
      <div className="flex flex-wrap gap-5 justify-center mt-8">
        {partyData.map((party, index) => (
          <PartyCard key={party.id} party={party} total={totalVote} />
        ))}
      </div>
    </div>
  );
};

export default VoteCount;
