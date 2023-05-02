import { QrStyleContext } from '@/context/index';
import clsx from 'clsx';
import React, { useContext } from 'react';

const FileInput = () => {
  const { dispatch, state } = useContext(QrStyleContext);
  const [error, setError] = React.useState('');

  const onFileUpload = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif|\.svg)$/i;
      if (!allowedExtensions.exec(file.name)) {
        setError('Invalid file type');
        return false;
      }
      setError('');
      dispatch({
        type: 'SET_QR_LOGO_IMAGE',
        payload: { logoImage: file },
      });
    },
    [dispatch]
  );

  const removeLogo = React.useCallback(() => {
    dispatch({
      type: 'SET_QR_LOGO_IMAGE',
      payload: { logoImage: '' },
    });
  }, [dispatch]);

  const buttonStyle =
    'w-fit items-center rounded-lg bg-blue-light px-2 py-3 text-white transition-all duration-300 ease-in-out cursor-pointer';

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-x-3 gap-y-2 lg:flex-row">
        <label className={buttonStyle} htmlFor={'FileInput'}>
          {state.logoImage ? 'Change Logo' : 'Upload Logo'}
          <input
            className="sr-only"
            type="file"
            onChange={onFileUpload}
            id={'FileInput'}
            accept={'image/png, image/jpeg, image/jpg, image/gif, image/svg+xml'}
          />
        </label>

        <button
          className={clsx(buttonStyle, {
            'cursor-not-allowed opacity-50': !state.logoImage,
          })}
          onClick={removeLogo}
          disabled={!state.logoImage}
        >
          Remove Logo
        </button>
      </div>
      {error && <p className={'mt-3 text-red-500'}>Error: {error}</p>}
    </>
  );
};

export default FileInput;
