import TextInput from '@/components/titleSection/input/textInput';
import { InputProps } from '@/typings/typings';
import dynamic from 'next/dynamic';

const EmailInput = dynamic(() => import('@/components/titleSection/input/emailInput'), {
  ssr: false,
});

type Input = {
  [key: string]: JSX.Element;
};

const Input = ({ typeOfInput }: InputProps) => {
  const inputs: Input = {
    text: <TextInput />,
    email: <EmailInput />,
    wifi: <>TODO</>,
    vCard: <>TODO</>,
  };

  return <div className={'mt-5'}>{inputs[typeOfInput]}</div>;
};

export default Input;
