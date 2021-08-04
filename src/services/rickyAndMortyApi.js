const URL = 'https://rickandmortyapi.com/api/character';

export async function getCharacter(id) {
  const res = await fetch(`${URL}/${id}`);
  const json = await res.json();
  return json;
}

export async function fetchCharacters() {
  const res = await fetch(URL);
  const json = await res.json();
  return json.results;
}
