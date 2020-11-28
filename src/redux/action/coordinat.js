import {actionType} from './actionType';

export const getCoordinatCreator = (latitude, longitude) => {
  return {
    type: actionType.getCoodinat,
    payload: {
      latitude,
      longitude,
    },
  };
};

export const addCoordinatCreator = (latitude, longitude) => {
  return {
    type: actionType.addCoordinat,
    payload: {
      latitude,
      longitude,
    },
  };
};
