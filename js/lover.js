const loadLovers = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displaylover(data.results))
}

const displaylover = lovers =>{
    const loverContainer = document.getElementById('lover-container');
    for(const lover of lovers){
        console.log(lover);
        const loverDiv = document.createElement('div');
        loverDiv.innerHTML = `
            <h1>Lover1</h1>
            <p><b>Gender:</b> ${lover.gender}</p>
            <p><b>Email:</b> ${lover.email}</p>
            <p><b>Location:</b> ${lover.location.city}, ${lover.location.country}</p>
            <p><b>UserName:</b> ${lover.login.username}</p>
        `;
        loverDiv.classList.add('newlover');
        loverContainer.appendChild(loverDiv);
    }
}
loadLovers();
