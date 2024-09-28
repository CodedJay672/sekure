import React from 'react';
import './Switch.css';


interface SwitchProps {
  text?: string;
  isOn: boolean;
  handleToggle: () => void;
}

const Switch: React.FC<SwitchProps> = ({ text, isOn, handleToggle }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="switch-checkbox"
        id="switch-input"
        type="checkbox"
      />
      <label htmlFor="switch-input" className="switch-label">
        <span className={`switch-button ${isOn ? 'flex-center' : 'flex-end'} text-[10px] leading-[11.75px]`}>{text}</span>
      </label>
    </>
  );
};

export default Switch;