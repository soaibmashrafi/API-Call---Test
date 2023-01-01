const loadQuote = () =>{
    fetch("https://api.kanye.rest/")
    .then(res=> res.json())
    .then(data=> displayQuote(data))
}

const displayQuote = quote => {
    const blockQuote = document.getElementById('items')
    blockQuote.innerText = quote.quote
}