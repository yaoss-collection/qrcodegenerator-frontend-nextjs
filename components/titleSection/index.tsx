import { H1 } from '@/common/titles';
import QrCodeWrapper from '@/common/wrappers/qrcodeDisplay';

type TitleProps = {
  title: string;
};
const Title = ({ title }: TitleProps) => {
  return (
    <div className={'flex flex-col gap-36 lg:grid lg:grid-cols-2 xl:gap-48'}>
      <div className={'mt-20'}>
        <H1 title={title} />
      </div>
      <QrCodeWrapper />
    </div>
  );
};

export default Title;
