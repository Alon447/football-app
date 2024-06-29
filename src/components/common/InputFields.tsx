import React from 'react';

type InputFieldProps = {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  placeholder: string;
  min?: number;
  max?: number;
};

const InputFields: React.FC<InputFieldProps> = ({ label, name, type, value, onChange, placeholder, min, max }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder={placeholder}
        min={min}
        max={max}
      ></input>
    </div>
  );
};

export default InputFields;
