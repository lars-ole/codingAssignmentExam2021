//Har lastet ned "Live Server" tillegg på Visual studi code for å kunne kjøre .json-filen.

fetch('names.json')

    .then(resp => resp.json())
    .then(data => {
        const nameList = document.querySelector('ul')
        data.forEach(names => {
            divNames = document.createElement('div')
            divNames.innerHTML += `
        <li class = "name" > ${names.name} (${names.age}) </li>
        <ul> </ul>
        <table class = "city"> ${names.city} (${names.relation}) </table>`
            nameList.append(divNames)
        })
    })
