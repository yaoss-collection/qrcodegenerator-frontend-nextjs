import ColorSwitcher from '@/common/wrappers/qrcodeDisplay/colorSwitcher';
import { Tab } from '@headlessui/react';
import React from 'react';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
export const ColorsTabs = () => {
  const tabs = [
    {
      name: 'Background',
      jsx: <ColorSwitcher change={'background'} />,
    },
    {
      name: 'Dots',
      jsx: <ColorSwitcher change={'dotColor'} />,
    },
    {
      name: 'Eyes',
      jsx: <ColorSwitcher change={'eyeColor'} />,
    },
  ];
  return (
    <Tab.Group>
      <Tab.List className="flex flex-wrap items-center gap-x-2 gap-y-2 rounded-xl bg-blue-900/20 p-1 lg:flex-nowrap">
        {tabs.map((tab) => (
          <Tab
            key={tab.name}
            className={({ selected }) =>
              classNames(
                'flex w-fit justify-center rounded-lg bg-blue-light px-2 py-3 text-xs font-medium uppercase leading-5 transition-all duration-300 ease-in-out lg:w-full',
                selected
                  ? 'bg-blue-light text-white shadow'
                  : 'text-blue-100 opacity-50 hover:bg-white/[0.12] hover:text-white'
              )
            }
          >
            {tab.name}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="mt-2">
        {tabs.map((tab) => (
          <Tab.Panel key={tab.name}>{tab.jsx}</Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};
