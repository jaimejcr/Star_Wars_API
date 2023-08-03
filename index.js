const div1 = document.querySelector(".div1");
const urlCharacters = "https://swapi.dev/api/people/";

async function fetchAPI (){
    const response = await fetch(urlCharacters);
    const data = await response.json();
    const results = data.results;

    return results
}

function processData(results) {

    results.forEach((character) => {
      const p = document.createElement("p");
      p.textContent = character.name;
      div1.appendChild(p);
    });
  }
  fetchAPI().then(processData);

  const div2 = document.querySelector(".div2");
  async function ejercicio2 () {
    const response = await fetch(urlCharacters);
    const data = await response.json();
    const darthVaderInfo = data.results[3];

    darthVaderInfo.forEach((information)=>{
        const p = document.createElement("p")
        p.textContent = information;
        div2.append(p);
    })

  }
  ejercicio2();

const div3 = document.querySelector(".div3");

async function ejercicio3() {
  const response = await fetch(urlCharacters);
  const data = await response.json();

  console.log(data.results[0].films);
  const urlListOfFilms = data.results[0].films;
  urlListOfFilms.forEach((url1) => {
    async function films() {
      const responseFilm = await fetch(url1);
      const dataFilm = await responseFilm.json();

      const lukeFilms = dataFilm.title;
      console.log(lukeFilms);
    }
    films();
  });
}
   ejercicio3()

const div4 = document.querySelector(".div4");

async function ejercicio4(){
    const response = await fetch(urlCharacters);
    const data = await response.json();
    const homeworld = data.results[4].homeworld;
    const res = await fetch(homeworld);
    const dataHomeWorld = await res.json();
    console.log(dataHomeWorld);
}
ejercicio4();

const div5 = document.querySelector(".div5");

async function ejercicio5 (){
    const response = await fetch(urlCharacters);
    const data = await response.json();
   
    const charactersList = data.results;
    const c3p0Url = charactersList[1];
    const c3p0Films = c3p0Url.films;
    c3p0Films.forEach ((element)=>{
        
        async function filmsFetch (){
            const filmRes = await fetch(element);
            const filmData= await  filmRes.json();
            const listFilms = filmData;
            console.log(listFilms);
            
        };
        filmsFetch();

    })

}
ejercicio5();
