//  Generare password in base a variabili richieste all'utente


//  chiedere nome all'utente

    let nome = parseInt(prompt("inserisci il tuo nome"));

    console.log(nome);

//  chiedere cognome all'utente

    let cognome = parseInt(prompt("inserisci il tuo cognome"));

    console.log(cognome);

//  chiedere colore preferito all'utente

    let colore = parseInt(prompt("inserisci il tuo colore preferito"));

    console.log(colore);

//  generazione password (nome + cognome + colore preferito + 21)

    console.log(password)

    document.getElementById("text").innerHTML = `${nome}${cognome}${colore}21`;