import QRCodeDisplay from '@/common/wrappers/qrcodeDisplay/qrCode';
import Styles from '@/common/wrappers/qrcodeDisplay/styles';
import { QrStyleContext } from '@/context/index';
import { useContext } from 'react';

const QrCodeWrapper = () => {
  const { state } = useContext(QrStyleContext);
  return (
    <div className="mx-auto flex w-11/12 flex-col items-center justify-center rounded-2xl bg-secondary px-14 py-16 font-spline-sans lg:mx-0 lg:w-auto">
      <div className={'mx-auto lg:px-12'}>
        <QRCodeDisplay
          fgColor={'white'}
          bgColor={'transparent'}
          value={'test'}
          size={200}
          qrStyle={state.style}
        />
      </div>

      <Styles title={'Shape & Color'} className={'mt-10 w-full'} />
    </div>
  );
};

export default QrCodeWrapper;
