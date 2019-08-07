import React from "react";
import "../css/App.css";
import { useSelector } from "react-redux";
import { isWordSelectorOpen, getWords } from "../selectors";

export default function WordSelector() {
  const isOpen = useSelector(isWordSelectorOpen);
  const words = useSelector(getWords);

  if (!isOpen) {
    return null;
  }
  return (
    <div className="word-selector">
      <span className="word-selector-attribution">
        Powered by Datamuse, Makers of{" "}
        <a href="https://www.onelook.com/">OneLook</a>
      </span>
      <div className="word-selector-words">
        {words.map(word => {
          return (
            <div className="word-selector-word" key={word.word}>
              {word.word}
            </div>
          );
        })}
      </div>
    </div>
  );
}
