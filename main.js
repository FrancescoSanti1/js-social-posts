// Passi logici

// Creo un array di oggetti
    // ogni oggetto contiene tutte le informazioni di un post
// con un ciclo for attraverso l'array di oggetti
    // se l'oggetto selezionato ha una stringa vuota nella proprietà immagine, 
        // allora stampo una struttura html senza tag img
        // altrimenti stampo la struttura html completa
// al click su "mi piace"
    // assegno al pulsante la classe ".like-button--liked"
    // incremento di uno il numero di like
    // aggiorno il numero di like visualizzato in pagina



// Creo un array di oggetti
    // ogni oggetto contiene tutte le informazioni di un post

const listaPost = [
    {
        "nomeAutore": "Phil",
        "dataPost": "due minuti fa",
        "fotoProfilo": "https://unsplash.it/300/300?image=15",
        "testoPost": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam dolores animi eligendi dignissimos nam dolorum asperiores ducimus nemo vel sapiente veritatis excepturi dolorem quidem doloremque, nobis nisi dolor odit incidunt ea aut. Est voluptates, sit cum commodi nam neque recusandae illo omnis ab in, sunt sint, autem obcaecati quam tempore!",
        "fotoPost": "https://unsplash.it/600/300?image=171",
        "numLikes": 50
    },
    {
        "nomeAutore": "Carola",
        "dataPost": "due mesi fa",
        "fotoProfilo": "https://unsplash.it/300/300?image=16",
        "testoPost": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        "fotoPost": "",
        "numLikes": 5
    },
    {
        "nomeAutore": "Frank",
        "dataPost": "2 settimane fa",
        "fotoProfilo": "https://unsplash.it/300/300?image=17",
        "testoPost": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam dolores animi eligendi dignissimos nam dolorum asperiores ducimus nemo vel sapiente veritatis excepturi dolorem quidem doloremque, nobis nisi dolor odit incidunt ea aut.",
        "fotoPost": "https://unsplash.it/600/300?image=170",
        "numLikes": 30
    },
    {
        "nomeAutore": "Phil",
        "dataPost": "due ore fa",
        "fotoProfilo": "https://unsplash.it/300/300?image=18",
        "testoPost": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam dolores animi eligendi dignissimos nam dolorum asperiores ducimus nemo vel sapiente veritatis excepturi dolorem quidem doloremque, nobis nisi dolor odit incidunt ea aut. Est voluptates, sit cum commodi nam neque recusandae illo omnis ab in, sunt sint, autem obcaecati quam tempore!",
        "fotoPost": "https://unsplash.it/600/300?image=172",
        "numLikes": 70
    },
    {
        "nomeAutore": "Anna",
        "dataPost": "un anno fa",
        "fotoProfilo": "https://unsplash.it/300/300?image=19",
        "testoPost": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        "fotoPost": "",
        "numLikes": 2
    },
    {
        "nomeAutore": "Sara",
        "dataPost": "un mese fa",
        "fotoProfilo": "https://unsplash.it/300/300?image=20",
        "testoPost": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        "fotoPost": "https://unsplash.it/600/300?image=171",
        "numLikes": 140
    },
    {
        "nomeAutore": "Monica",
        "dataPost": "un anno fa",
        "fotoProfilo": "https://unsplash.it/300/300?image=21",
        "testoPost": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam dolores animi eligendi dignissimos nam dolorum asperiores ducimus nemo vel sapiente veritatis excepturi dolorem quidem doloremque, nobis nisi dolor odit incidunt ea aut.",
        "fotoPost": "https://unsplash.it/600/300?image=171",
        "numLikes": 450
    }
];

// con un ciclo for attraverso l'array di oggetti
for (let i = 0; i < listaPost.length; i++) {

    // se l'oggetto selezionato ha una stringa vuota nella proprietà immagine, 
    if (listaPost[i].fotoPost === "") {

        // allora stampo una struttura html senza tag img
        document.getElementById("container").innerHTML += `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${listaPost[i].fotoProfilo}" alt="${listaPost[i].nomeAutore}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${listaPost[i].nomeAutore}</div>
                        <div class="post-meta__time">${listaPost[i].dataPost}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${listaPost[i].testoPost}</div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${listaPost[i].numLikes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>`;
    } else {
        
        // altrimenti stampo la struttura html completa
        document.getElementById("container").innerHTML += `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${listaPost[i].fotoProfilo}" alt="${listaPost[i].nomeAutore}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${listaPost[i].nomeAutore}</div>
                        <div class="post-meta__time">${listaPost[i].dataPost}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${listaPost[i].testoPost}</div>
            <div class="post__image">
                <img src="${listaPost[i].fotoPost}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${listaPost[i].numLikes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>`;
    }
}


// al click su "mi piace"
    // assegno al pulsante la classe ".like-button--liked"
    // incremento di uno il numero di like
    // aggiorno il numero di like visualizzato in pagina