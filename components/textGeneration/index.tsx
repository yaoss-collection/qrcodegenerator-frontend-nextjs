import { H1 } from '@/common/titles';
import QrCodeWrapper from '@/common/wrappers/qrcodeDisplay';

const TextGeneration = () => {
  return (
    <div className={'flex flex-col gap-36 lg:flex-row'}>
      <div className={'mt-20'}>
        <H1 title="Enter your text" />
      </div>
      <QrCodeWrapper />
    </div>
  );
};

export default TextGeneration;
