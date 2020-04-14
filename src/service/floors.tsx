import React from "react";
import { Floor } from "models/floor.model";

const initialState = {
  floors: [],
};

type Action = { type: "SET_FLOORS"; floors: Floor[] };
type Dispatch = (action: Action) => void;
type State = {
  floors: Floor[];
};
type FloorProviderProps = { children: React.ReactNode };

const FloorStateContext = React.createContext<State | undefined>(undefined);
const FloorDispatchContext = React.createContext<Dispatch | undefined>(
  undefined
);

const FloorReducer = (prevState: State, action: Action) => {
  switch (action.type) {
    case "SET_FLOORS": {
      return {
        ...prevState,
        floors: action.floors,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const FloorProvider = ({ children }: FloorProviderProps) => {
  const [state, dispatch] = React.useReducer(FloorReducer, initialState);
  return (
    <FloorStateContext.Provider value={state}>
      <FloorDispatchContext.Provider value={dispatch}>
        {children}
      </FloorDispatchContext.Provider>
    </FloorStateContext.Provider>
  );
};

function useFloorState() {
  const context = React.useContext(FloorStateContext);
  if (context === undefined) {
    throw new Error("useFloorState must be used within a CountProvider");
  }
  return context;
}

function useFloorDispatch() {
  const context = React.useContext(FloorDispatchContext);
  if (context === undefined) {
    throw new Error("useFloorDispatch must be used within a CountProvider");
  }
  return context;
}

export { FloorProvider, useFloorState, useFloorDispatch };
