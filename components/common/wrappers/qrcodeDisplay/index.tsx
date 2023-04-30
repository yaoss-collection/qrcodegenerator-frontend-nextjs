import QRCodeDisplay from '@/common/wrappers/qrcodeDisplay/qrCode';
import Styles from '@/common/wrappers/qrcodeDisplay/styles';
import { useState } from 'react';
import { IProps } from 'react-qrcode-logo';

const QrCodeWrapper = () => {
  const [qrStyle, setQrStyle] = useState<IProps['qrStyle']>('squares');
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl bg-secondary px-14 py-16 font-spline-sans">
      <div className={'mx-auto px-10'}>
        <QRCodeDisplay
          fgColor={'white'}
          bgColor={'transparent'}
          value={'test'}
          size={200}
          qrStyle={qrStyle ?? 'squares'}
        />
      </div>

      <Styles
        title={'Shape & Color'}
        className={'mt-10 w-full'}
        qrStyle={qrStyle}
        setQrStyle={setQrStyle}
      />
    </div>
  );
};

export default QrCodeWrapper;
