

function searchCountry() {
    let searchValue = document.getElementById("txtSearchValue").value;
    
    // Fetch country data based on the search value
    fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
        .then(res => res.json())
        .then(data => {
            
                const country = data[0];
                document.getElementById('offitalName').innerText = country.name.official;
                document.getElementById('name').innerText = country.name.common;
                document.getElementById('img').innerHTML = `<img src="${country.flags.png}" alt="Flag of ${country.name.common}">`;

                let tableContent = `
                    <tr>
                        <th>Capital</th>
                        <td>${country.capital}</td>
                    </tr>
                    <tr>
                        <th>Region</th>
                        <td>${country.region}</td>
                    </tr>
                    <tr>
                        <th>Population</th>
                        <td>${country.population}</td>
                    </tr>
                    <tr>
                        <th>Area</th>
                        <td>${country.area} km²</td>
                    </tr>
                    <tr>
                        <th>Languages</th>
                        <td>${Object.values(country.languages).join(', ')}</td>
                    </tr>
                `;
                document.getElementById('tbl').innerHTML = tableContent;
            
        })
        
}
