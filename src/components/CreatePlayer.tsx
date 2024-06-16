import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Skills {
  defending: Number;
  heading: Number;
  passing: Number;
  shooting: Number;
  dribbling: Number;
  speed: Number;
  stamina: Number;
  work_rate: Number;
  goalkeeping: Number;
}
interface Player {
  name: string;
  age: Number;
  jerseyNumber: Number;
  position: string;
  skills: Skills;
  playerType: string;
}
interface PlayerType {
  name: string;
  label: string;
  attributes: Partial<Skills>;
}
const CreatePlayer: React.FC = () => {
  const [player, setPlayer] = useState<Player>({
    name: '',
    age: 18,
    jerseyNumber: 99,
    position: 'Forward',
    skills: {
      defending: 0,
      heading: 0,
      passing: 0,
      shooting: 0,
      dribbling: 0,
      speed: 0,
      stamina: 0,
      work_rate: 0,
      goalkeeping: 0,
    },
    playerType: '',
  });

  // generic state setters to handle user selection
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPlayer((prevPlayer) => ({
      ...prevPlayer,
      [name]: value,
    }));
  };

  const handlePlayerTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const type = e.target.value;
    const selectedType = playerTypes.find((pt) => pt.name === type);
    setPlayer((prevPlayer) => ({
      ...prevPlayer,
      playerType: type,
      skills: {
        ...prevPlayer.skills,
        ...selectedType?.attributes,
      },
    }));
  };

  /**
   * function to handle player creation
   * for now stores the player in local storage.
   * maybe add db later
   */
  const handleCreatePlayer = () => {
    localStorage.setItem('player', JSON.stringify(player));
  };
  const playerTypes = [
    {
      name: 'skiller',
      label: 'Skiller',
      attributes: {
        dribbling: 10,
      },
    },
    {
      name: 'sniper',
      label: 'Sniper',
      attributes: {
        shooting: 10,
      },
    },
    {
      name: 'defender',
      label: 'Defender',
      attributes: {
        defending: 10,
      },
    },
    {
      name: 'header',
      label: 'Header',
      attributes: {
        heading: 10,
      },
    },
    {
      name: 'speedster',
      label: 'Speedster',
      attributes: {
        speed: 10,
      },
    },
    {
      name: 'hardworking',
      label: 'Hardworking',
      attributes: {
        work_rate: 10,
      },
    },
  ];
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
      label: 'Jersey Number',
      name: 'jerseyNumber',
      type: 'Number',
      placeholder: '',
      min: 1,
      max: 99,
    },
    // {
    //   label: 'Nationality',
    //   name: 'nationality',
    //   type: 'text',
    //   placeholder: 'Enter Players Nationality',
    // },
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
        {/* skill selection */}
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Player Type: </label>
          <select
            name="playerType"
            value={player.playerType}
            onChange={handlePlayerTypeChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            {playerTypes.map((type) => (
              <option key={type.name} value={type.name}>
                {type.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* Display player attributes */}
      <div className="mt-4">
        <h3 className="text-3xl font-bold mb-4">Skills</h3>
        {Object.entries(player.skills).map(([skill, value]) => (
          <div key={skill} className="flex justify-between">
            <span className="font-semibold">{skill}: </span>
            <span className="">{value}</span>
          </div>
        ))}
      </div>
      {/* Bottom Buttons */}
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleCreatePlayer}
        >
          Create Player
        </button>
        <Link to={'/'} className="bg-blue-700 text-white px-4 py-2 rounded  hover:bg-blue-800">
          Back Home
        </Link>
      </div>
    </div>
  );
};
export default CreatePlayer;
