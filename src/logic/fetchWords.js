import { createLogic } from "redux-logic";
import { getHighlightedLetters } from "../selectors";
import fetchWordsBySpelling from "../clients/datamuse"
import { wordsLoaded, closeWordSelector } from "../actions";
import { isEmpty } from "lodash";

export default createLogic({
  type: "SEARCH_WORD",
  async process({getState, action}, dispatch, done) {
    const state = getState()
    const letters = getHighlightedLetters(state)
    if(letters){
      try {
        const query = letters.replace(/ /g, "").replace(/_/g, "?")
        const words = await fetchWordsBySpelling(query)
        if(isEmpty(words)){
          dispatch(wordsLoaded([{word: "No Results"}]))
        } else {
          dispatch(wordsLoaded(words))
        }
        
      } catch (error) {
        dispatch(wordsLoaded([{word: "Error"}]))
      }
      
    } else {
      dispatch(wordsLoaded([{word: "No Results"}]))
      dispatch(closeWordSelector())
    }
    
    done();
  }
});