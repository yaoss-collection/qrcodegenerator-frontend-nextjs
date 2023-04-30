import { Disclosure, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { useCallback } from 'react';
import { IProps } from 'react-qrcode-logo';

type DetailsProps = {
  title: string;
  className: string;
  setQrStyle: React.Dispatch<React.SetStateAction<IProps['qrStyle']>>;
  qrStyle: IProps['qrStyle'];
};

type ButtonProps = {
  title: string;
  active?: boolean;
  onClick?: () => void;
};

const Styles = ({ title, className, setQrStyle, qrStyle }: DetailsProps) => {
  const handleStyleChange = useCallback(
    (style: IProps['qrStyle']) => {
      setQrStyle(style);
    },
    [setQrStyle]
  );

  return (
    <div className={className}>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={clsx(
                'flex w-full justify-between rounded-lg rounded-b-none bg-secondary-light py-2 py-5 pl-6 text-left text-sm text-white focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75',
                {
                  'rounded-b-lg': !open,
                }
              )}
            >
              <span className={'font-semibold uppercase'}>{title}</span>
            </Disclosure.Button>
            <>
              <Transition
                enter={'transition duration-100 ease-out'}
                enterFrom={'transform -translate-y-1/2 opacity-0'}
                enterTo={'transform translate-y-0 opacity-100'}
                leave={'transition duration-75 ease-out'}
                leaveFrom={'transform translate-y-0 opacity-100'}
                leaveTo={'transform -translate-y-1/2 opacity-0'}
              >
                <Disclosure.Panel
                  className={
                    'flex justify-center rounded-b-lg bg-secondary-light px-4 pb-8 pt-2 text-sm text-gray-500'
                  }
                >
                  <Button
                    title={'Squares'}
                    active={qrStyle === 'squares'}
                    onClick={() => handleStyleChange('squares')}
                  />
                  <Button
                    title={'Dots'}
                    active={qrStyle === 'dots'}
                    onClick={() => handleStyleChange('dots')}
                  />
                </Disclosure.Panel>
              </Transition>
            </>
          </>
        )}
      </Disclosure>
    </div>
  );
};

const Button = ({ title, active, onClick }: ButtonProps) => {
  return (
    <button
      className={clsx(
        'mr-2 rounded-lg bg-blue-light px-2 py-3 text-white transition-all duration-300 ease-in-out',
        {
          'bg-blue-light': active,
          'opacity-50': !active,
        }
      )}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Styles;
