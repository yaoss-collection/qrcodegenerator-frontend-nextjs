import Styles from '@/common/wrappers/qrcodeDisplay/styles';
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
      color: '#fff',
      type: `${state.dotType}` as DotType,
    },
    backgroundOptions: {
      color: 'transparent',
    },
    cornersSquareOptions: {
      color: '#fff',
      type: `${state.style}` as CornerSquareType,
    },
    cornersDotOptions: {
      color: '#fff',
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
        type: `${state.style}` as CornerSquareType,
      },
      cornersDotOptions: {
        type: `${state.style}` as CornerDotType,
      },
      dotsOptions: {
        type: `${state.dotType}` as DotType,
      },
    });
  }, [qrCode, state.style, state.dotType]);

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
      <div className={'mx-auto flex justify-center lg:px-12'} ref={ref} />

      <Styles title={'Shape & Color'} />
      {/* <button className={'text-lg'} onClick={onDownloadClick}>*/}
      {/*  Download*/}
      {/* </button>*/}
    </>
  );
};

export default QRCode;
