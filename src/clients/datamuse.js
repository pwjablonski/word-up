export default async function fetchWordsBySpelling(query){
    const response = await fetch(
        `https://cors-anywhere.herokuapp.com/http://api.datamuse.com/words?sp=${query}`
    );
    return response.json();;
}

