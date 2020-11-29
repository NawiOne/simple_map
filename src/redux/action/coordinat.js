import {actionType} from './actionType';

export const getCoordinatCreator = (latitude, longitude) => {
  return {
    type: actionType.getCoodinate,
    payload: {
      latitude,
      longitude,
    },
  };
};

export const addCoordinatCreator = (latitude, longitude) => {
  return {
    type: actionType.addCoordinate,
    payload: {
      latitude,
      longitude,
    },
  };
};
