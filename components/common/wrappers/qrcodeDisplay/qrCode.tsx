import ColorSwitcher from '@/common/wrappers/qrcodeDisplay/colorSwitcher';
import Details from '@/common/wrappers/qrcodeDisplay/details';
import Shapes from '@/common/wrappers/qrcodeDisplay/shapes';
import { ColorTypes } from '@/context/colorTypes';
import { QrStyleContext } from '@/context/index';
import { Tab } from '@headlessui/react';
import QRCodeStyling, {
  CornerDotType,
  CornerSquareType,
  DotType,
  DrawType,
  ErrorCorrectionLevel,
  Mode,
  Options,
  TypeNumber,
} from 'qr-code-styling';
import React, { useContext, useEffect, useRef, useState } from 'react';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
const QRCode = () => {
  const { state } = useContext(QrStyleContext);
  const [options] = useState<Options>({
    width: 215,
    height: 215,
    type: 'svg' as DrawType,
    data: `${state.value}`,
    image: '/favicon.ico',
    margin: 10,
    qrOptions: {
      typeNumber: 0 as TypeNumber,
      mode: 'Byte' as Mode,
      errorCorrectionLevel: 'Q' as ErrorCorrectionLevel,
    },
    imageOptions: {
      hideBackgroundDots: true,
      imageSize: 0.4,
      margin: 20,
      crossOrigin: 'anonymous',
    },
    dotsOptions: {
      color: `${state.dotColor}` as ColorTypes['colors'],
      type: `${state.dotType}` as DotType,
    },
    backgroundOptions: {
      color: `${state.background}` as ColorTypes['colors'],
    },
    cornersSquareOptions: {
      color: `${state.eyeColor}` as ColorTypes['colors'],
      type: `${state.style}` as CornerSquareType,
    },
    cornersDotOptions: {
      color: `${state.eyeColor}` as ColorTypes['colors'],
      type: `${state.style}` as CornerDotType,
    },
  });
  // const [fileExt, setFileExt] = useState('svg');
  const [qrCode] = useState<QRCodeStyling>(new QRCodeStyling(options));
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      qrCode.append(ref.current);
    }
  }, [qrCode, ref]);

  useEffect(() => {
    if (!qrCode) return;
    qrCode.update({
      cornersSquareOptions: {
        color: `${state.eyeColor}` as ColorTypes['colors'],
        type: `${state.style}` as CornerSquareType,
      },
      cornersDotOptions: {
        color: `${state.eyeColor}` as ColorTypes['colors'],
        type: `${state.style}` as CornerDotType,
      },
      dotsOptions: {
        type: `${state.dotType}` as DotType,
        color: `${state.dotColor}` as ColorTypes['colors'],
      },
      backgroundOptions: {
        color: `${state.background}` as ColorTypes['colors'],
      },
    });
  }, [qrCode, state.style, state.dotType, state.background, state.dotColor, state.eyeColor]);

  // const onDataChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setOptions((options) => ({
  //     ...options,
  //     data: event.target.value,
  //   }));
  // };
  //
  // const onExtensionChange = (event: ChangeEvent<HTMLSelectElement>) => {
  //   setFileExt(event.target.value);
  // };

  // const onDownloadClick = () => {
  //   if (!qrCode) return;
  //   qrCode.download({
  //     extension: fileExt as FileExtension,
  //   });
  // };

  const tabs = [
    {
      name: 'Background',
      jsx: <ColorSwitcher change={'background'} />,
    },
    {
      name: 'Dots',
      jsx: <ColorSwitcher change={'dotColor'} />,
    },
    {
      name: 'Eyes',
      jsx: <ColorSwitcher change={'eyeColor'} />,
    },
  ];

  return (
    <>
      <div className={'mx-auto flex justify-center pb-5 lg:px-12'} ref={ref} />

      <Details title={'Shape'}>
        <Shapes />
      </Details>
      <Details title={'Colors'}>
        <Tab.Group>
          <Tab.List className="flex flex-wrap items-center gap-x-2 gap-y-2 rounded-xl bg-blue-900/20 p-1 lg:flex-nowrap">
            {tabs.map((tab) => (
              <Tab
                key={tab.name}
                className={({ selected }) =>
                  classNames(
                    'flex w-fit justify-center rounded-lg bg-blue-light px-2 py-3 text-xs font-medium uppercase leading-5 transition-all duration-300 ease-in-out lg:w-full',
                    selected
                      ? 'bg-blue-light text-white shadow'
                      : 'text-blue-100 opacity-50 hover:bg-white/[0.12] hover:text-white'
                  )
                }
              >
                {tab.name}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {tabs.map((tab) => (
              <Tab.Panel key={tab.name}>{tab.jsx}</Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </Details>
      {/* <button className={'text-lg'} onClick={onDownloadClick}>*/}
      {/*  Download*/}
      {/* </button>*/}
    </>
  );
};

export default QRCode;
