import React from "react";
import "../css/App.css";
import { useSelector, useDispatch } from "react-redux";
import {isPuzzleSelectorOpen, getPuzzles } from "../selectors"
import {
    closePuzzleSelector,
    changeCurrentPuzzle
} from '../actions'
import Modal from '../components/Modal'

export default function WordSelector() {
  const dispatch = useDispatch()
  const isOpen = useSelector(isPuzzleSelectorOpen);
  const puzzles = useSelector(getPuzzles);

  function onClosePuzzleSelector(){
    dispatch(closePuzzleSelector())
  }

  function onChangeCurrentPuzzle(key){
    dispatch(changeCurrentPuzzle(key))
  }

  if(!isOpen){
      return null;
  }
  return (
    <Modal isOpen={isOpen}>
      <div className="modal__text">
        <p>
          Choose your Puzzle
        </p>
      </div>
      <div className="puzzle-selector">
        {
          Object.keys(puzzles).map((key)=>{
            return (
                <div
                  key={puzzles[key].puzzleKey}
                  className="puzzle-selector-item"
                  onClick={()=>onChangeCurrentPuzzle(puzzles[key].puzzleKey)}
                >
                  {puzzles[key].title}
                </div>
            )
          })
        }
        </div>
      <button className="modal__button" type="button" onClick={onClosePuzzleSelector}>
        Close
      </button>
    </Modal>
  );
}