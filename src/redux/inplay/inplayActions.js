import {
    FETCH_INPLAYS_REQUEST,
    FETCH_INPLAYS_SUCCESS,
    FETCH_INPLAYS_FAILURE,
    FETCH_INPLAY_REQUEST,
    FETCH_INPLAY_SUCCESS,
    FETCH_INPLAY_FAILURE,
    CREATE_INPLAY_REQUEST,
    CREATE_INPLAY_SUCCESS,
    CREATE_INPLAY_FAILURE,
    UPDATE_INPLAY_REQUEST,
    UPDATE_INPLAY_SUCCESS,
    UPDATE_INPLAY_FAILURE,
    DELETE_INPLAYS_REQUEST,
    DELETE_INPLAYS_SUCCESS,
    DELETE_INPLAYS_FAILURE,
  } from "./inplayTypes";
  import axios from "axios";
  
  export const fetchInplaysRequest = () => {
    return {
      type: FETCH_INPLAYS_REQUEST,
    };
  };
  
  export const fetchInplaysSuccess = (inplays) => {
    return {
      type: FETCH_INPLAYS_SUCCESS,
      payload: inplays,
    };
  };
  
  export const fetchInplaysFailure = (error) => {
    return {
      type: FETCH_INPLAYS_FAILURE,
      payload: error,
    };
  };
  
  export const fetchInplayRequest = () => {
    return {
      type: FETCH_INPLAY_REQUEST,
    };
  };
  
  export const fetchInplaySuccess = (inplay) => {
    return {
      type: FETCH_INPLAY_SUCCESS,
      payload: inplay,
    };
  };
  
  export const fetchInplayFailure = (error) => {
    return {
      type: FETCH_INPLAY_FAILURE,
      payload: error,
    };
  };
  
  export const createInplayRequest = () => {
    return {
      type: CREATE_INPLAY_REQUEST,
    };
  };
  
  export const createInplaySuccess = (inplay) => {
    return {
      type: CREATE_INPLAY_SUCCESS,
      payload: inplay,
    };
  };
  
  export const createInplayFailure = (error) => {
    return {
      type: CREATE_INPLAY_FAILURE,
      payload: error,
    };
  };
  
  export const updateInplayRequest = () => {
    return {
      type: UPDATE_INPLAY_REQUEST,
    };
  };
  
  export const updateInplaySuccess = (inplay) => {
    return {
      type: UPDATE_INPLAY_SUCCESS,
      payload: inplay,
    };
  };
  
  export const updateInplayFailure = (error) => {
    return {
      type: UPDATE_INPLAY_FAILURE,
      payload: error,
    };
  };
  
  export const deleteInplaysRequest = () => {
    return {
      type: DELETE_INPLAYS_REQUEST,
    };
  };
  
  export const deleteInplaysSuccess = (inplays) => {
    return {
      type: DELETE_INPLAYS_SUCCESS,
      payload: inplays,
    };
  };
  
  export const deleteInplaysFailure = (error) => {
    return {
      type: DELETE_INPLAYS_FAILURE,
      payload: error,
    };
  };
  
  export const fetchInplays = () => {
      return (dispatch) => {
        dispatch(fetchInplaysRequest);
        await axios.get(`/api/admin/deposit`)
                    .then(response => {
                      const finds = response.data;
                      dispatch(fetchInplaysSuccess(finds))
                }).catch(error => {
                      const errorMsg = error.message;
                      dispatch(fetchInplaysFailure(errorMsg))
                })
        };
  };
  
  export const fetchInplay = () => {
    return (dispatch) => {
      dispatch(fetchInplayRequest);
      await axios.get(`/api/admin/deposit`)
                  .then(response => {
                    const find = response.data;
                    dispatch(fetchInplaySuccess(find))
              }).catch(error => {
                    const errorMsg = error.message;
                    dispatch(fetchInplayFailure(errorMsg))
              })
      };
  };
  
  export const createInplay = () => {
    return (dispatch) => {
      dispatch(createInplayRequest);
      await axios.get(`/api/admin/deposit`)
                  .then(response => {
                    const find = response.data;
                    dispatch(createInplaySuccess(find))
              }).catch(error => {
                    const errorMsg = error.message;
                    dispatch(createInplayFailure(errorMsg))
              })
      };
  };
  
  export const updateInplay = () => {
    return (dispatch) => {
      dispatch(updateInplayRequest);
      await axios.get(`/api/admin/deposit`)
                  .then(response => {
                    const find = response.data;
                    dispatch(updateInplaySuccess(find))
              }).catch(error => {
                    const errorMsg = error.message;
                    dispatch(updateInplayFailure(errorMsg))
              })
      };
  };
  
  export const deleteInplays = () => {
    return (dispatch) => {
      dispatch(deleteInplaysRequest);
      await axios.get(`/api/admin/deposit`)
                  .then(response => {
                    const finds = response.data;
                    dispatch(deleteInplaysSuccess(finds))
              }).catch(error => {
                    const errorMsg = error.message;
                    dispatch(deleteInplaysFailure(errorMsg))
              })
      };
  };
  
  