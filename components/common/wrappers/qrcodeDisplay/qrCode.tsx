import Details from '@/common/wrappers/qrcodeDisplay/details';
import ShapesSwitcher from '@/common/wrappers/qrcodeDisplay/shapesSwitcher';
import { ColorsTabs } from '@/common/wrappers/qrcodeDisplay/tabs/colorsTabs';
import { ColorTypes } from '@/context/colorTypes';
import { QrStyleContext } from '@/context/index';
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
      data: `${state.value}`,
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
  }, [
    qrCode,
    state.style,
    state.dotType,
    state.background,
    state.dotColor,
    state.eyeColor,
    state.value,
  ]);

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

  return (
    <>
      <div className={'mx-auto flex justify-center pb-5 lg:px-12'} ref={ref} />
      <Details title={'Shape'}>
        <ShapesSwitcher />
      </Details>
      <Details title={'Colors'}>
        <ColorsTabs />
      </Details>
      {/* <button className={'text-lg'} onClick={onDownloadClick}>*/}
      {/*  Download*/}
      {/* </button>*/}
    </>
  );
};

export default QRCode;
