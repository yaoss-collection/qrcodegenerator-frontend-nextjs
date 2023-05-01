import { ArrowSvg } from '@/common/svgs/arrowSvg';
import { CheckMarkSvg } from '@/common/svgs/checkMarkSvg';
import { ResetSvg } from '@/common/svgs/resetSvg';
import { ColorTypes } from '@/context/colorTypes';
import { Disclosure, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

type DetailsProps = {
  title: string;
  children: React.ReactNode;
};

export type ButtonProps = {
  title: string;
  active?: boolean;
  onClick?: () => void;
  isColorPicker?: boolean;
  color?: ColorTypes['colors'];
  resettable?: boolean;
};

const Details = ({ title, children }: DetailsProps) => {
  return (
    <>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={clsx(
                'mt-5 flex w-full items-center justify-between rounded-lg bg-secondary-light py-5 pl-6 text-left text-sm text-white focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75',
                {
                  'rounded-b-lg': !open,
                  'rounded-b-none': open,
                }
              )}
            >
              <span className={'font-semibold uppercase'}>{title}</span>
              <span
                className={clsx('mr-5', {
                  'rotate-180 transform': !open,
                  'rotate-0 transform': open,
                })}
              >
                <ArrowSvg />
              </span>
            </Disclosure.Button>
            <>
              <Transition
                enter={'transition duration-100 ease-out'}
                enterFrom={'transform -translate-y-1/2 opacity-0'}
                enterTo={'transform translate-y-0 opacity-100'}
                leave={'transition duration-75 ease-out'}
                leaveFrom={'transform translate-y-0 opacity-100'}
                leaveTo={'transform -translate-y-1/2 opacity-0'}
                unmount={false}
              >
                <Disclosure.Panel
                  className={'rounded-b-lg bg-secondary-light px-6 pb-8 pt-2 text-sm text-gray-500'}
                >
                  {children}
                </Disclosure.Panel>
              </Transition>
            </>
          </>
        )}
      </Disclosure>
    </>
  );
};

export const Button = ({
  title,
  isColorPicker,
  color,
  active,
  onClick,
  resettable,
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        'mr-2 flex items-center rounded-lg bg-blue-light px-2 py-3 text-white transition-all duration-300 ease-in-out',
        {
          'bg-blue-light': active && !isColorPicker,
          'opacity-50': !active && !isColorPicker,
          'h-10 w-10': isColorPicker,
          'text-white': isColorPicker && color !== '#FFFFFF',
          'text-black': isColorPicker && active && color === '#FFFFFF',
        }
      )}
      onClick={onClick}
      style={{
        ...(isColorPicker && {
          backgroundColor: color,
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        }),
      }}
      aria-label={title}
      aria-pressed={active}
      {...(isColorPicker && {
        title: title,
      })}
    >
      {!isColorPicker && title}
      {resettable && !active && (
        <span
          className={clsx('w-full', {
            'text-black': isColorPicker && color === '#FFFFFF',
          })}
        >
          <ResetSvg />
        </span>
      )}

      <motion.span
        animate={
          active && isColorPicker
            ? {
                scale: [1, 1.2, 1],
                opacity: [0, 0.5, 1],
                width: ['100%', '100%', '100%'],
              }
            : {
                scale: [1, 0.8, 0],
                opacity: [1, 1, 0],
                width: ['100%', '100%', '0%'],
              }
        }
        transition={{
          duration: 0.3,
        }}
        className={clsx('w-full', {
          'text-black': isColorPicker && color === '#FFFFFF',
        })}
      >
        {<CheckMarkSvg />}
      </motion.span>
    </button>
  );
};

export default Details;
