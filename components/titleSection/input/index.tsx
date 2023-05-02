import TextInput from '@/components/titleSection/input/textInput';
import { InputProps } from '@/typings/typings';
import dynamic from 'next/dynamic';

// This to avoid the error "Warning: Expected server HTML to contain a matching <input> in <div>."
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
  };

  return <div className={'mt-5'}>{inputs[typeOfInput]}</div>;
};

export default Input;
