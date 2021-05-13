import * as types from "./esportTypes";

const initialState = {
  loading: false,
  matches: [],
  currentPage: 1,
  lastPage: 1,
  matches: [],
  sideMarket: [],
  sportsTypeId: null,
  sportsMatches: { data: [] },
  prematchMatches: [],
  inplayMatches: { data: [] },
  
};

const esportReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ESPORTS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case types.FETCH_PREMATCH:
      let prematchDatas = [];
      let prematch = action.payload.data

      state.sportTypeIds.map((id) => {
        console.log(id);
        let data = prematch.filter((x) => {
          return x.type == id;
        });
        prematchDatas.push(...data)
      })

      state.tournamentIds.map((id) => {
        console.log(id);
        let data = prematch.filter((x) => {
          return x.tournamentId == id;
        });
        prematchDatas.push(...data)
      })


      return {
        ...state,
        prematchMatches: prematchDatas,
      }
    case types.FETCH_INPLAY:

      let inplayDatas = [];
      let inplay = action.payload.data

      state.sportTypeIds.map((id) => {
        console.log(id);
        let data = inplay.filter((x) => {
          return x.type == id;
        });
        inplayDatas.push(...data)
      })

      state.tournamentIds.map((id) => {
        console.log(id);
        let data = inplay.filter((x) => {
          return x.tournamentId == id;
        });
        inplayDatas.push(...data)
      })

      return {
        ...state,
        inplayMatches: inplayDatas,
      }
    default:
      return state;
  }
};

export default esportReducer;
