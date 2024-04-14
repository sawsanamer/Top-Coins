export enum ActionTypes {
  WS_CONNECT = "ws/connect",
  WS_DISCONNECT = "ws/disconnect",
}

export function connectToWS() {
  return {
    type: ActionTypes.WS_CONNECT,
  };
}

export function disconnectWS() {
  return {
    type: ActionTypes.WS_DISCONNECT,
  };
}
