// ColorSelect.tsx
import React from 'react';
import chroma from 'chroma-js';
import Select, { StylesConfig, SingleValue } from 'react-select';

// Define the type for a color option
export interface ColourOption {
  value: string;
  label: string;
  color: string;
}

// Define the list of color options
const colourOptions: ColourOption[] = [
  { value: 'red', label: 'Red', color: '#EF4444' },
  { value: 'orange', label: 'Orange', color: '#F97316' },
  { value: 'amber', label: 'Amber', color: '#F59E0B' },
  { value: 'yellow', label: 'Yellow', color: '#EAB308' },
  { value: 'lime', label: 'Lime', color: '#84CC16' },
  { value: 'green', label: 'Green', color: '#22C55E' },
  { value: 'emerald', label: 'Emerald', color: '#10B981' },
  { value: 'teal', label: 'Teal', color: '#14B8A6' },
  { value: 'cyan', label: 'Cyan', color: '#06B6D4' },
  { value: 'sky', label: 'Sky', color: '#0EA5E9' },
  { value: 'blue', label: 'Blue', color: '#3B82F6' },
  { value: 'indigo', label: 'Indigo', color: '#6366F1' },
  { value: 'violet', label: 'Violet', color: '#8B5CF6' },
  { value: 'purple', label: 'Purple', color: '#A855F7' },
  { value: 'pink', label: 'Pink', color: '#EC4899' },
];

// Helper function to create a dot with a color
const dot = (color: string = 'transparent') => ({
  alignItems: 'center',
  display: 'flex',
  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

// Custom styles for the select component
const colourStyles: StylesConfig<ColourOption, false> = {
  control: (styles) => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: isDisabled ? '#ccc' : '#4a5568',
      cursor: isDisabled ? 'not-allowed' : 'default',
      display: 'flex',
      alignItems: 'center',
      ':before': {
        backgroundColor: data.color,
        borderRadius: '50%',
        content: '" "',
        display: 'block',
        marginRight: 8,
        height: 10,
        width: 10,
      },
      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    };
  },
  input: (styles) => ({ ...styles, ...dot() }),
  placeholder: (styles) => ({ ...styles, ...dot('#ccc') }),
  singleValue: (styles, { data }) => ({ ...styles, color: '#4a5568', ...dot(data.color) }),
};

// Define the props for the ColorSelect component
interface ColorSelectProps {
  value: SingleValue<ColourOption>;
  onChange: (option: SingleValue<ColourOption>) => void;
  options?: ColourOption[];
}

const ColorSelect: React.FC<ColorSelectProps> = ({ value, onChange, options = colourOptions }) => (
  <Select
    value={value}
    onChange={onChange}
    options={options}
    styles={colourStyles}
    placeholder="Select a color"
    className=''
  />
);

export default ColorSelect;
