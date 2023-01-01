const loadusers =()=>{
   fetch('https://randomuser.me/api/?results=5')
   .then(res => res.json())
   .then(data => displayUsers(data.results))
}
const displayUsers = users => {
    const userContainer = document.getElementById('body-container');
    for(const user of users){
        console.log(user)
        const userDiv = document.createElement('div')
        userDiv.innerHTML = `
            
            <h1> ${user.name.first} ${user.name.last}</h1>
            <p><b>Age:</b> ${user.registered.age} </p>
            <p><b>Email:</b> ${user.email} </p>
            <p><b>Location:</b> ${user.location.city}, ${user.location.country} </p>
        `;
        userDiv.classList.add('user');
        userContainer.appendChild(userDiv);
    }

}
loadusers();