import { H1 } from '@/common/titles';
import QrCodeWrapper from '@/common/wrappers/qrcodeDisplay';
import Input from '@/components/titleSection/input';
import { InputProps } from '@/typings/typings';

type TitleProps = {
  title: string;
  typeOfInput: InputProps['typeOfInput'];
};
const Title = ({ title, typeOfInput }: TitleProps) => {
  return (
    <div className={'flex flex-col gap-36 lg:grid lg:grid-cols-2 xl:gap-48'}>
      <div className={'mx-auto mt-20 w-11/12 max-w-[420px] lg:w-full'}>
        <H1 title={title} />
        <Input typeOfInput={typeOfInput} />
      </div>
      <QrCodeWrapper />
    </div>
  );
};

export default Title;
