# Consegna

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

<br>
<br>

## MILESTONE 1

Prepariamo l'HTML ed il CSS per ottenere il risultato grafico che vediamo nell'immagine allegata.

## MILESTONE 2

Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite JS. Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna.

## MILESTONE 3

In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100;

## ILESTONE 4

Al click sulla cella, stampiamo il numero della cella cliccata in console, poi coloriamo la cella d'azzurro!

<br>
<br>

- Inizio
- Creo una funzione per creare una cella cooun numero coorrispondente
- Creo una funzione per gestire il click sulla cella
  - stampo il numero in console
  - aggiungo una classe per colorare la cella
- Recupero gli elementi dal DOM
- Preparo i dati iniziali
- Creo una variabile per tenere traccia dello stato della griglia (inizializzata a false)
- Creo un Event Listener al click del Button
- Verifico se la griglia è già stata visualizzata
- Se la griglia non è ancora stata visualizzata:

  - Inizializzare la variabile (cellNumber) a 1.
  - Renderizzo le celle
  - Creo le cell con il numero corrispondente (usando la funzione)
  - Aggiungoo un Event Listenere
  - Appendo cell a grid
  - Incremento il numero della cella
  - Imposto lo stato della grid a true.

- Fine
