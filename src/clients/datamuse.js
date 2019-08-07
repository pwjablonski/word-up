export default async function fetchWordsBySpelling(query) {
  const response = await fetch(
    // eslint-disable-next-line max-len
    `https://cors-anywhere.herokuapp.com/http://api.datamuse.com/words?sp=${query}&max=99`
  );
  return response.json();
}
