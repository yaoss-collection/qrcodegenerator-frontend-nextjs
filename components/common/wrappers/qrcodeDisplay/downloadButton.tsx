import { DownloadSvg } from '@/common/svgs/downloadSvg';
import React from 'react';

type DownloadButtonProps = {
  onDownloadClickSvg: () => void;
  onDownloadClickPng: () => void;
};

const DownloadButton = ({ onDownloadClickSvg, onDownloadClickPng }: DownloadButtonProps) => {
  return (
    <div
      className={
        'mt-5 flex w-full flex-col items-center justify-between gap-5 gap-x-5 rounded-lg px-6 py-5 text-left text-sm text-white lg:flex-row'
      }
    >
      <button
        className={
          'flex w-full items-center justify-center rounded-full bg-download-blue px-2 py-5 text-white transition-all duration-300 ease-in-out'
        }
        onClick={onDownloadClickPng}
      >
        <span className={'mr-2 w-6'}>
          <DownloadSvg />
        </span>
        PNG
      </button>
      <button
        className={
          'flex w-full items-center justify-center rounded-full bg-download-orange px-2 py-5 text-white transition-all duration-300 ease-in-out'
        }
        onClick={onDownloadClickSvg}
      >
        <span className={'mr-2 w-6'}>
          <DownloadSvg />
        </span>
        SVG
      </button>
    </div>
  );
};

export default DownloadButton;
