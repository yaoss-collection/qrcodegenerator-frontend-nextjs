import React, { createContext, useMemo, useReducer } from 'react';
import { IProps } from 'react-qrcode-logo';

const initialState: IState = {
  style: 'squares',
  value: "I'm EMPTY",
};

interface IState {
  style: IProps['qrStyle'];
  value: IProps['value'];
}

type Actions = 'SET_QR_STYLE' | 'SET_QR_VALUE';
interface IAction {
  type: Actions;
  payload: { style?: IProps['qrStyle']; value?: IProps['value'] };
}

interface IContextProps {
  state: IState;
  dispatch: React.Dispatch<IAction>;
}

type QrStyleProviderProps = { children: React.ReactNode };

export const QrStyleContext = createContext<IContextProps>({
  state: initialState,
  dispatch: () => null,
});

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case 'SET_QR_STYLE':
      return {
        ...state,
        style: action.payload.style,
      };
    case 'SET_QR_VALUE':
      return {
        ...state,
        value: action.payload.value,
      };
    default:
      return state;
  }
};

export const QrStyleProvider = ({ children }: QrStyleProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <QrStyleContext.Provider value={useMemo(() => ({ state, dispatch }), [state, dispatch])}>
      {children}
    </QrStyleContext.Provider>
  );
};
