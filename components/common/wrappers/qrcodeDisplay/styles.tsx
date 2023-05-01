import { ArrowSvg } from '@/common/svgs/arrowSvg';
import { QrStyleContext } from '@/context/index';
import { Disclosure, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { useContext } from 'react';

type DetailsProps = {
  title: string;
};

type ButtonProps = {
  title: string;
  active?: boolean;
  onClick?: () => void;
};

const Styles = ({ title }: DetailsProps) => {
  const { state, dispatch } = useContext(QrStyleContext);

  return (
    <>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={clsx(
                'mt-10 flex w-full items-center justify-between rounded-lg bg-secondary-light py-5 pl-6 text-left text-sm text-white focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75',
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
                  <div className={'flex flex-wrap justify-center'}>
                    <Button
                      title={'Squares'}
                      active={state.style === 'square'}
                      onClick={() =>
                        dispatch({
                          type: 'SET_QR_STYLE',
                          payload: { style: 'square', dotType: 'square' },
                        })
                      }
                    />
                    <Button
                      title={'Dots'}
                      active={state.style === 'dot'}
                      onClick={() =>
                        dispatch({
                          type: 'SET_QR_STYLE',
                          payload: { style: 'dot' },
                        })
                      }
                    />
                  </div>
                  {state.style === 'dot' && (
                    <Transition
                      enter={'transition duration-100 ease-out'}
                      enterFrom={'transform -translate-y-1/2 opacity-0'}
                      enterTo={'transform translate-y-0 opacity-100'}
                      leave={'transition duration-75 ease-out'}
                      leaveFrom={'transform translate-y-0 opacity-100'}
                      leaveTo={'transform -translate-y-1/2 opacity-0'}
                      show={state.style === 'dot'}
                    >
                      <div className={'mt-5 flex flex-col justify-center px-1'}>
                        <p className={'mb-3'}>
                          <span className={'text-xs font-semibold uppercase text-white'}>
                            Dot Type customizations
                          </span>
                        </p>
                        <div className={'flex flex-wrap gap-y-3'}>
                          <Button
                            title={'Rounded*'}
                            active={state.dotType === 'rounded'}
                            onClick={() =>
                              dispatch({
                                type: 'SET_QR_DOT_TYPE',
                                payload: { dotType: 'rounded' },
                              })
                            }
                          />
                          <Button
                            title={'Classy*'}
                            active={state.dotType === 'classy'}
                            onClick={() =>
                              dispatch({
                                type: 'SET_QR_DOT_TYPE',
                                payload: { dotType: 'classy' },
                              })
                            }
                          />
                          <Button
                            title={'Square'}
                            active={state.dotType === 'square'}
                            onClick={() =>
                              dispatch({
                                type: 'SET_QR_DOT_TYPE',
                                payload: { dotType: 'square' },
                              })
                            }
                          />
                        </div>
                        <p className={'mt-5 text-xs font-light text-white'}>
                          * Dot types <strong>&quot;Rounded&quot;</strong> and{' '}
                          <strong>&quot;Classy&quot;</strong> can alter the QR code&apos;s
                          readability.
                        </p>
                      </div>
                    </Transition>
                  )}
                </Disclosure.Panel>
              </Transition>
            </>
          </>
        )}
      </Disclosure>
    </>
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
