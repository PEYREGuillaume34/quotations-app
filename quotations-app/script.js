 let formulaire = document.getElementById("formulaire");
console.log(formulaire)

formulaire.addEventListener("submit", function(event) {
        event.preventDefault();
    let text = document.getElementById("citation").value;
    let author = document.getElementById("auteur").value;
    console.log(text,author)
    
});



function addQuote(text,author){

let paraText = document.createElement('p');
paraText.classList.add('text')
paraText.innerText = text

let paraAuth = document.createElement('p');
paraAuth.classList.add('author')
paraAuth.innerText = author

const divQuote = document.createElement('div');
divQuote.classList.add('quote');
divQuote.appendChild(paraText)
divQuote.appendChild(paraAuth)
}

let quoteList = document.getElementById("quote-list")
quoteList.appenchild(divQuote)


let number