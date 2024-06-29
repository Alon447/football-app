import React from 'react';
import { Link } from 'react-router-dom';
const FirstClub: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welocme to Football Player Sim</h1>
      <Link to={'/create-player'} className="bg-blue-700 text-white px-4 py-2 rounded  hover:bg-blue-800">
        Create a player
      </Link>
    </div>
  );
};
export default FirstClub;
