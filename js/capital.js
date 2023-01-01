const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountry(data))
}
const displayCountry = countries => {

    const countryContainer = document.getElementById('country-container');
    for(const country of countries){
        console.log(country);
        const countryDiv = document.createElement('div')
        countryDiv.classList.add('countryArea')
        
        countryDiv.innerHTML = `

            <h1>${country.name.common} </h1>
            <p><b>Capital:</b> ${country.capital? country.capital[0] : 'No Capital'}</p>
            <button onClick="loadDetails('${country.cca2}')">Details</button>
           
        `;
        countryContainer.appendChild(countryDiv);
    }

    const loadDetails = (code) => {
        console.log("get details", code);
    }
    loadDetails();
}
loadCountry();
