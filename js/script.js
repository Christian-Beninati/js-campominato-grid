console.log('JS OK')


// # FUNCTION---------------------------------------

// Function per creare una cell
const createCell = () => {
    const cell = document.createElement('div');
    cell.classList.add ('cell');
    return cell;
}


// # INITIAN OPERATIONS----------------------------

// Recupero gli elementi dal DOM
const grid = document.getElementById('grid');
const button = document.getElementById('button')


// Preparo dati iniziali
const rows = 10;
const cols = 10;
const totalCells = cols * rows;

// Creo una variabile per tenere traccia dello stato della grid
let gridVisible = false;

// Creo un Event Listener al click del Button
button.addEventListener ('click', function () {
    
    // Controllo se la grid è già stata visualizzata
    if (!gridVisible) {
      // reinderizzo le cell
      for(let i = 0; i < totalCells; i++) {
    
      // creo le cell (nodi)
      const cell = createCell();
      // appendo  cel (nodi) a grid
      grid.appendChild(cell);
    }
    // Imposto lo stato della grid su true
    gridVisible = true;
}
});


