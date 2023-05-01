import { CornerSquareType, DotType } from 'qr-code-styling';
import React, { createContext, useMemo, useReducer } from 'react';
import { IProps } from 'react-qrcode-logo';

const initialState: IState = {
  style: 'square',
  dotType: 'square',
  value: "I'm EMPTY",
};

interface IState {
  style?: CornerSquareType;
  dotType?: DotType;
  value: IProps['value'];
}

type Actions = 'SET_QR_STYLE' | 'SET_QR_VALUE' | 'SET_QR_DOT_TYPE';
interface IAction {
  type: Actions;
  payload: { style?: CornerSquareType; value?: IProps['value']; dotType?: DotType };
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
