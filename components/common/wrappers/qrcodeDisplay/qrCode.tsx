import Details from '@/common/wrappers/qrcodeDisplay/details';
import FileInput from '@/common/wrappers/qrcodeDisplay/inputFile';
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

  const toBase64 = (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const [options] = useState<Options>({
    width: 235,
    height: 235,
    type: 'svg' as DrawType,
    data: `${state.value}`,
    image: '',
    margin: 10,
    qrOptions: {
      typeNumber: 0 as TypeNumber,
      mode: 'Byte' as Mode,
      errorCorrectionLevel: 'Q' as ErrorCorrectionLevel,
    },
    imageOptions: {
      hideBackgroundDots: true,
      imageSize: 0.4,
      margin: 5,
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
    if (state.logoImage) {
      if (typeof state.logoImage === 'string') {
        qrCode.update({
          image: state.logoImage,
        });
      } else {
        toBase64(state.logoImage).then((res) => {
          qrCode.update({
            image: res,
          });
        });
      }
    }
    if (state.logoImage === '') {
      qrCode.update({
        image: '',
      });
    }
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
    state.logoImage,
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
      <Details title={'Logo'}>
        <FileInput />
      </Details>
      {/* <button className={'text-lg'} onClick={onDownloadClick}>*/}
      {/*  Download*/}
      {/* </button>*/}
    </>
  );
};

export default QRCode;
