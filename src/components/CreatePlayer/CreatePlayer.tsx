import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import usePlayerStore from './PlayerStore';

const CreatePlayer: React.FC = () => {
  const player = usePlayerStore((state) => state.player);
  const setPlayer = usePlayerStore((state) => state.setPlayer);
  const createPlayer = usePlayerStore((state) => state.createPlayer);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  // generic state setters to handle user selection
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPlayer({ [name]: value });
  };
  const handleCreatePlayer = () => {
    const { age, name, nationality, position } = player;
    if (!age || !name || !nationality || !position) {
      setErrorMessage('All Field Are Required');
      return;
    }
    createPlayer();
    navigate('/first-club');
  };
  const inputFields = [
    {
      label: 'Player Name',
      name: 'name',
      type: 'text',
      placeholder: 'Enter Players Name',
    },
    {
      label: 'Age',
      name: 'age',
      type: 'Number',
      placeholder: '',
      min: 17,
      max: 32,
    },

    {
      label: 'Nationality',
      name: 'nationality',
      type: 'text',
      placeholder: 'Enter Players Nationality',
    },
  ];
  return (
    <div className="container mx-auto max-w-lg mt-10">
      <h1 className="text-4xl font-bold mb-6">Welcome To Player Creator</h1>
      {/* general info selection */}
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {inputFields.map((field) => (
          <div key={field.name} className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">{field.label}: </label>
            <input
              type={field.type}
              name={field.name}
              value={(player as any)[field.name]}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder={field.placeholder}
              min={field.min}
              max={field.max}
            />
          </div>
        ))}
        {/* Position selection */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Position: </label>
          <select
            name="position"
            value={player.position}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="Goalkeeper">Goalkeeper</option>
            <option value="Defender">Defender</option>
            <option value="Midfielder">Midfielder</option>
            <option value="Forward">Forward</option>
          </select>
        </div>
        {/* Error message */}
        <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
      </div>
      {/* Bottom Buttons */}
      <div className="flex items-center justify-between">
        <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded" onClick={handleCreatePlayer}>
          Create Player
        </button>
        <Link to={'/'} className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded">
          Back Home
        </Link>
      </div>
    </div>
  );
};
export default CreatePlayer;
