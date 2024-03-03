import React from "react";

interface AdCardProps {
  serial:number;
  userId: string;
  bloodGroup: string;
  unitsRequired: number;
  contactPerson: string;
  contactNumber: string;
  location: string;
}
const AdCard: React.FC<AdCardProps> = ({
  serial,  
  userId,
  bloodGroup,
  unitsRequired,
  contactPerson,
  contactNumber,
  location,
}) => {
  return (
    <div className="flex bg-white border-b border-gray-200 py-4 items-center">
            <div className="flex-grow">
                <p className="font-semibold">{serial}</p>
            </div>
            <div className="flex-grow">
                <p className="font-semibold">{bloodGroup}</p>
            </div>
            <div className="flex-grow">
                <p className="font-semibold">{unitsRequired}</p>
            </div>
            <div className="flex-grow">
                <p className="font-semibold">{contactPerson}</p>
            </div>
            <div className="flex-grow">
                <p className="font-semibold">{contactNumber}</p>
            </div>
            <div className="flex-grow">
                <p className="font-semibold">{location}</p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Contact
            </button>
        </div>
  );
};

export default AdCard;
