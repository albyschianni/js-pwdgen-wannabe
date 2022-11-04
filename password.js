//  Generare password in base a variabili richieste all'utente


//  chiedere nome all'utente

    let nome = prompt("inserisci il tuo nome");

    console.log(nome);

//  chiedere cognome all'utente

    let cognome = prompt("inserisci il tuo cognome");

    console.log(cognome);

//  chiedere colore preferito all'utente

    let colore = prompt("inserisci il tuo colore preferito");

    console.log(colore);

//  generazione password (nome + cognome + colore preferito + 21)

    let password = nome + cognome + colore + 21;

    console.log(password);

    document.getElementById("text").innerHTML = password;