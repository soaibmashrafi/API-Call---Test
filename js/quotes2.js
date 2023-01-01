const loadQuotes2 = () => {
   fetch('https://api.kanye.rest/')
   .then(res => res.json())
   .then(data => displayQuotes2(data))
}
const displayQuotes2 = new1 =>{
    const blockQuotesNew = document.getElementById('list')
    // console.log(new1)
    blockQuotesNew.innerText = new1.quote
}


