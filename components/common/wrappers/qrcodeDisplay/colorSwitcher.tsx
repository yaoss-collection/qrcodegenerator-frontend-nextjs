import { Button } from '@/common/wrappers/qrcodeDisplay/details';
import { colorNames, ColorTypes } from '@/context/colorTypes';
import { QrStyleContext } from '@/context/index';
import React, { useContext } from 'react';

type BackgroundColorsProps = {
  change: 'background' | 'dotColor';
};

const ColorSwitcher = ({ change }: BackgroundColorsProps) => {
  const { state, dispatch } = useContext(QrStyleContext);

  function generateColorButtons(colors: ColorTypes['colors'][]): {
    onClick: () => void;
    color: string;
    isColorPicker: boolean;
    active: boolean;
    title: string;
    resettable: boolean;
  }[] {
    return colors.map((color) => ({
      title: colorNames[color],
      isColorPicker: true,
      resettable:
        (change === 'background' && color === 'transparent') ||
        (change === 'dotColor' && color === '#FFFFFF'),
      color: color,
      active: state[change] === color,
      onClick: () =>
        dispatch({
          type: `SET_QR_${change.toUpperCase()}`,
          payload: { [change]: color },
        }),
    }));
  }

  const colorButtons: {
    onClick: () => void;
    color: string;
    isColorPicker: boolean;
    active: boolean;
    title: string;
    resettable: boolean;
  }[] = generateColorButtons([
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
  ]);

  return (
    <>
      <p className={'mb-3'}>
        <span className={'text-xs font-semibold uppercase text-white'}>
          {change === 'background' ? 'Background Color' : 'Dot Color'}
        </span>
      </p>
      <div className={'flex flex-wrap justify-center gap-x-0 gap-y-3'}>
        {colorButtons.map((button) => (
          <Button
            key={button.color}
            isColorPicker={button.isColorPicker}
            resettable={button.resettable}
            title={button.title}
            color={button.color as ColorTypes['colors']}
            active={button.active}
            onClick={button.onClick}
          />
        ))}
      </div>
    </>
  );
};

export default ColorSwitcher;
