import { ColorTypes } from '@/context/colorTypes';
import { CornerSquareType, DotType } from 'qr-code-styling';
import React, { createContext, useMemo, useReducer } from 'react';
import { IProps } from 'react-qrcode-logo';

const initialState: IState = {
  style: 'square',
  dotType: 'square',
  background: 'transparent',
  dotColor: '#FFFFFF',
  value: "I'm EMPTY",
};

export interface IState {
  style?: CornerSquareType;
  dotType?: DotType;
  background?: ColorTypes['colors'];
  dotColor?: ColorTypes['colors'];
  value: IProps['value'];
}

type Actions =
  | 'SET_QR_STYLE'
  | 'SET_QR_VALUE'
  | 'SET_QR_DOT_TYPE'
  | 'SET_QR_BACKGROUND'
  | 'SET_QR_DOT_COLOR'
  | `SET_QR_${string}`;
export interface IAction {
  type: Actions;
  payload: {
    style?: CornerSquareType;
    value?: IProps['value'];
    dotType?: DotType;
    background?: ColorTypes['colors'];
    dotColor?: ColorTypes['colors'];
  };
}

export interface IContextProps {
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
        dotType: action.payload.dotType,
      };
    case 'SET_QR_VALUE':
      return {
        ...state,
        value: action.payload.value,
      };
    case 'SET_QR_DOT_TYPE':
      return {
        ...state,
        dotType: action.payload.dotType,
      };
    case 'SET_QR_BACKGROUND':
      return {
        ...state,
        background: action.payload.background,
      };
    case 'SET_QR_DOTCOLOR':
      return {
        ...state,
        dotColor: action.payload.dotColor,
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
