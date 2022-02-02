import { useState, useEffect } from 'react';
import { camelCase } from 'lodash';

import { CheckboxWrapperStyled, CheckboxStyled } from './CheckboxList.styled';

const Checkbox: React.FC<{
  name: string;
  checked: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}> = ({ name, checked, onChange }) => (
  <CheckboxStyled>
    <input
      type="checkbox"
      id={camelCase(name)}
      name={camelCase(name)}
      checked={checked}
      onChange={onChange}
    />
    <label htmlFor={camelCase(name)}>{name}</label>
  </CheckboxStyled>
);

export const CheckboxList: React.FC<{ options: Array<string> }> = ({
  options,
}) => {
  const [allChecked, setAllChecked] = useState(true);
  const [selected, setSelected] = useState<Array<string>>([]);

  useEffect(() => {
    if (!selected.length) {
      setAllChecked(false);
    }
    if (options.length === selected.length) {
      setAllChecked(true);
    } else {
      setAllChecked(false);
    }
  }, [options.length, selected]);

  const handleAllCheck = () => {
    if (!allChecked) {
      setSelected(options);
    } else {
      setSelected([]);
    }
    setAllChecked(!allChecked);
  };

  const handleCheckboxCheck = (option: string) => {
    const tempArray: Array<string> = [...selected];
    const isSelected = selected.includes(option);
    if (isSelected) {
      setSelected(tempArray.filter((i) => i !== option));
    } else {
      tempArray.push(option);
      setSelected(tempArray);
    }
  };

  return (
    <CheckboxWrapperStyled>
      <Checkbox name="All" checked={allChecked} onChange={handleAllCheck} />
      {options.map((option) => (
        <Checkbox
          key={camelCase(option)}
          name={option}
          checked={selected.includes(option)}
          onChange={() => handleCheckboxCheck(option)}
        />
      ))}
    </CheckboxWrapperStyled>
  );
};
