import { EmailSvg } from '@/common/svgs/emailSvg';
import { TextSvg } from '@/common/svgs/textSvg';
import { VCardSvg } from '@/common/svgs/vCardSvg';
import { WifiSvg } from '@/common/svgs/wifiSvg';
import { QrStyleContext } from '@/context/index';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect, useMemo, useRef, useState } from 'react';

interface Tab {
  icon: React.ReactNode;
  href: string;
  id: string;
}

type TabProps = {
  children?: React.ReactNode;
};

const Layout = ({ children }: TabProps) => {
  const { dispatch } = useContext(QrStyleContext);
  const tabsData: Tab[] = useMemo(
    () => [
      {
        icon: TextSvg,
        href: '/',
        id: 'tab-1',
      },
      {
        icon: EmailSvg,
        href: '/email',
        id: 'tab-2',
      },
      {
        icon: WifiSvg,
        href: '/wifi',
        id: 'tab-3',
      },
      {
        icon: VCardSvg,
        href: '/vcard',
        id: 'tab-4',
      },
    ],
    []
  );
  const [state, setState] = useState({
    activeTabIndex: 0,
    tabBackground: { top: 0, height: 0, width: 0, left: 0 },
  });

  const tabsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  const { pathname } = useRouter();

  useEffect(() => {
    const initialActiveTabIndex = tabsData.findIndex((tab) => tab.href === pathname);
    if (initialActiveTabIndex !== -1) {
      setState((prevState) => ({ ...prevState, activeTabIndex: initialActiveTabIndex }));
      const currentTab = tabsRef.current[initialActiveTabIndex];
      setState((prevState) => ({
        ...prevState,
        tabBackground: {
          top: currentTab?.offsetTop ?? 0,
          height: currentTab?.clientHeight ?? 0,
          width: currentTab?.clientWidth ?? 0,
          left: currentTab?.offsetLeft ?? 0,
        },
      }));
      dispatch({ type: 'SET_QR_VALUE', payload: { value: "I'm EMPTY" } });
    }
  }, [pathname, tabsData, dispatch]);

  return (
    <div
      className={
        'mx-auto flex max-w-7xl flex-col bg-primary pt-24 font-spline-sans text-6xl font-medium text-secondary lg:flex-row'
      }
    >
      <nav
        className={
          'scrolling-auto flex h-full max-w-full snap-x flex-row overflow-x-auto rounded-full border border-gray-100 bg-white shadow-md lg:ml-14 lg:mt-14 lg:min-w-[5.5rem] lg:max-w-[5.5rem] lg:flex-col lg:overflow-x-hidden lg:overflow-y-hidden lg:px-4 lg:py-6'
        }
      >
        <div className={'relative flex-none'}>
          <motion.div
            layoutId={'tab-background'}
            className={'absolute right-0 w-full snap-end rounded-full bg-secondary'}
            animate={
              state.activeTabIndex !== -1
                ? {
                    top: state.tabBackground.top,
                    height: state.tabBackground.height,
                    width: state.tabBackground.width,
                    left: state.tabBackground.left,
                  }
                : {}
            }
            transition={{
              type: 'spring',
              stiffness: state.activeTabIndex !== -1 ? 500 : 0,
              // damping is the speed of the animation
              damping: state.activeTabIndex !== -1 ? 30 : 0,
            }}
            style={{
              boxShadow: 'rgba(0, 40, 138, 0.52) 0px 11px 25px -2px',
            }}
          />
          <div className={'mx-auto flex flex-row space-x-3 lg:flex-col lg:space-x-0 lg:space-y-3'}>
            {tabsData.map((tab, idx) => {
              return (
                <Link
                  href={tab.href}
                  key={tab.id}
                  ref={(el) => (tabsRef.current[idx] = el)}
                  id={tab.id}
                  className={clsx(
                    'flex items-center justify-center rounded-full p-10 transition-colors duration-300 ease-in-out lg:p-4',
                    pathname === tab.href || state.activeTabIndex === idx
                      ? 'z-50 animate-pulse-once font-bold text-white'
                      : 'font-medium'
                  )}
                  onClick={() => setState((prevState) => ({ ...prevState, activeTabIndex: idx }))}
                >
                  <div className={'w-6 lg:w-5'}>{tab.icon}</div>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
      <main className={'ml-0 lg:ml-20'}>{children}</main>
    </div>
  );
};

export default Layout;
