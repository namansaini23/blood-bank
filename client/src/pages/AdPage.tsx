import React from "react";
// import AdCard from "../components/AdCard";
import AdData from "../Data/Ads";

const AdPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4 text-center">Blood Requests</h1>
      <div className="flex justify-center">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Serial</th>
              <th className="px-4 py-2">Blood Group</th>
              <th className="px-4 py-2">Units Required(bags)</th>
              <th className="px-4 py-2">Contact Person</th>
              <th className="px-4 py-2">Contact Number</th>
              <th className="px-4 py-2">Location</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {AdData.map((item, key) => (
              <tr key={key}>
                <td className="border px-4 py-2">{key + 1}</td>
                <td className="border px-4 py-2">{item.bloodGroup}</td>
                <td className="border px-4 py-2">{item.unitsRequired}</td>
                <td className="border px-4 py-2">{item.contactPerson}</td>
                <td className="border px-4 py-2">{item.contactNumber}</td>
                <td className="border px-4 py-2">{item.location}</td>
                <td className="border px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                    Contact
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdPage;
