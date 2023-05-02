import { Button } from '@/common/wrappers/qrcodeDisplay/details';
import { ColorTypes } from '@/context/colorTypes';
import { IAction, QrStyleContext } from '@/context/index';
import React, { useContext, useMemo } from 'react';

type BackgroundColorsProps = {
  change: 'background' | 'dotColor' | 'eyeColor';
};

const colorNames: Record<ColorTypes['colors'], ColorTypes['colorNames']> = {
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

const ColorSwitcher = ({ change }: BackgroundColorsProps) => {
  const { state, dispatch } = useContext(QrStyleContext);

  const colors: ColorTypes['colors'][] = useMemo(
    () => [
      'transparent',
      '#1F2937',
      '#9B2C2C',
      '#D97706',
      '#22543D',
      '#1D4ED8',
      '#4F46E5',
      '#7C3AED',
      '#E11D8F',
      '#FFFFFF',
      '#000000',
    ],
    []
  );

  const colorButtons = useMemo(() => {
    return colors.map((color) => {
      const title = colorNames[color];
      const isColorPicker = true;
      const resettable =
        (change === 'background' && color === 'transparent') ||
        (change === 'dotColor' && color === '#FFFFFF') ||
        (change === 'eyeColor' && color === '#FFFFFF');
      const active = state[change] === color;

      const onClick = () => {
        const payload = { [change]: color };
        const actionType = `SET_QR_${change.toUpperCase()}`;
        dispatch({ type: actionType, payload } as IAction);
      };

      return { title, isColorPicker, resettable, color, active, onClick };
    });
  }, [change, colors, state, dispatch]);

  const colorButtonsJSX = colorButtons.map((button) => (
    <Button
      key={button.color}
      isColorPicker={button.isColorPicker}
      resettable={button.resettable}
      title={button.title}
      color={button.color}
      active={button.active}
      onClick={button.onClick}
    />
  ));

  return (
    <>
      <div className="flex flex-wrap justify-center gap-x-0 gap-y-3">{colorButtonsJSX}</div>
    </>
  );
};

export default ColorSwitcher;
