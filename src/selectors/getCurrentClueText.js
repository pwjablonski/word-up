import getCurrentClue from "./getCurrentClue";

export default function getCurrentClueText(state) {
  const currentClue = getCurrentClue(state);

  if (currentClue) {
    return currentClue.text;
  }
  return null;
}
