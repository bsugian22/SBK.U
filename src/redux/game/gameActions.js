import * as types from "./gameTypes";
import axios from "axios";

export const fetchGamesRequest = () => {
  return {
    type:  types.FETCH_GAMES_REQUEST,
  };
};

export const fetchGamesSuccess = (games) => {
  return {
    type:  types.FETCH_GAMES_SUCCESS,
    payload: games,
  };
};

export const fetchGamesFailure = (error) => {
  return {
    type:  types.FETCH_GAMES_FAILURE,
    payload: error,
  };
};

export const fetchGameRequest = () => {
  return {
    type:  types.FETCH_GAME_REQUEST,
  };
};

export const fetchGameSuccess = (game) => {
  return {
    type:  types.FETCH_GAME_SUCCESS,
    payload: game,
  };
};

export const fetchGameFailure = (error) => {
  return {
    type:  types.FETCH_GAME_FAILURE,
    payload: error,
  };
};

export const createGameRequest = () => {
  return {
    type:  types.CREATE_GAME_REQUEST,
  };
};

export const createGameSuccess = (game) => {
  return {
    type:  types.CREATE_GAME_SUCCESS,
    payload: game,
  };
};

export const createGameFailure = (error) => {
  return {
    type:  types.CREATE_GAME_FAILURE,
    payload: error,
  };
};

export const updateGameRequest = () => {
  return {
    type:  types.UPDATE_GAME_REQUEST,
  };
};

export const updateGameSuccess = (game) => {
  return {
    type:  types.UPDATE_GAME_SUCCESS,
    payload: game,
  };
};

export const updateGameFailure = (error) => {
  return {
    type:  types.UPDATE_GAME_FAILURE,
    payload: error,
  };
};

export const deleteGamesRequest = () => {
  return {
    type:  types.DELETE_GAMES_REQUEST,
  };
};

export const deleteGamesSuccess = (games) => {
  return {
    type:  types.DELETE_GAMES_SUCCESS,
    payload: games,
  };
};

export const deleteGamesFailure = (error) => {
  return {
    type:  types.DELETE_GAMES_FAILURE,
    payload: error,
  };
};

export const fetchGames = () => {
    return (dispatch) => {
      dispatch(fetchGamesRequest);
      await axios.get(`/api/`)
                  .then(response => {
                    const games = response.data;
                    dispatch(fetchGamesSuccess(games))
              }).catch(error => {
                    const errorMsg = error.message;
                    dispatch(fetchGamesFailure(errorMsg))
              })
      };
};

export const fetchGame = () => {
  return (dispatch) => {
    dispatch(fetchGameRequest);
    await axios.get(`/api/`)
                .then(response => {
                  const game = response.data;
                  dispatch(fetchGameSuccess(game))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(fetchGameFailure(errorMsg))
            })
    };
};

export const createGame = () => {
  return (dispatch) => {
    dispatch(createGameRequest);
    await axios.get(`/api/`)
                .then(response => {
                  const game = response.data;
                  dispatch(createGameSuccess(game))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(createGameFailure(errorMsg))
            })
    };
};

export const updateGame = () => {
  return (dispatch) => {
    dispatch(updateGameRequest);
    await axios.get(`/api/`)
                .then(response => {
                  const game = response.data;
                  dispatch(updateGameSuccess(game))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(updateGameFailure(errorMsg))
            })
    };
};

export const deleteGames = () => {
  return (dispatch) => {
    dispatch(deleteGamesRequest);
    await axios.get(`/api/`)
                .then(response => {
                  const games = response.data;
                  dispatch(deleteGamesSuccess(games))
            }).catch(error => {
                  const errorMsg = error.message;
                  dispatch(deleteGamesFailure(errorMsg))
            })
    };
};