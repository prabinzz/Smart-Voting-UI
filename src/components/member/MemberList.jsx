import React from "react";
import { FcOk, FcCancel } from "react-icons/fc";
const MemberList = ({ data }) => {
  const trStyle = "text-gray-900 font-medium px-6 py-4 whitespace-nowrap";
  return (
    <tr className="table-row bg-white border-b">
      <td className={`${trStyle}`}>{data.id}</td>
      <td className={`${trStyle}`}>{data.rfid}</td>
      <td className={`${trStyle}`}>{data.name}</td>
      <td className={`${trStyle}`}>{data.email}</td>
      <td className={`${trStyle}`}>{data.address}</td>
      <td className={`${trStyle}`}>{data.status ? <FcOk /> : <FcCancel />}</td>
    </tr>
  );
};

export default MemberList;
