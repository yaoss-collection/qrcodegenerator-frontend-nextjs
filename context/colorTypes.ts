export interface ColorTypes {
  colors:
    | 'transparent'
    | '#1F2937' // gray-700
    | '#9B2C2C' // red-700
    | '#D97706' // yellow-700
    | '#22543D' // green-700
    | '#1D4ED8' // blue-700
    | '#4F46E5' // indigo-700
    | '#7C3AED' // purple-700
    | '#E11D8F' // pink-700
    | '#FFFFFF' // white
    | '#000000'; // black
  colorNames:
    | 'Transparent'
    | 'Gray'
    | 'Red'
    | 'Yellow'
    | 'Green'
    | 'Blue'
    | 'Indigo'
    | 'Purple'
    | 'Pink'
    | 'White'
    | 'Black';
}

export const colorNames: Record<ColorTypes['colors'], ColorTypes['colorNames']> = {
  transparent: 'Transparent',
  '#1F2937': 'Gray',
  '#9B2C2C': 'Red',
  '#D97706': 'Yellow',
  '#22543D': 'Green',
  '#1D4ED8': 'Blue',
  '#4F46E5': 'Indigo',
  '#7C3AED': 'Purple',
  '#E11D8F': 'Pink',
  '#FFFFFF': 'White',
  '#000000': 'Black',
};
