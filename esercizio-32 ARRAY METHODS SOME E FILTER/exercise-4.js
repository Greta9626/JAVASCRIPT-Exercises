function uncompletedNotes(notes) {
  return notes.filter(note => {
    return note.todos.some(todo => todo.done === false); 

    /* procedimento: faccio il return per il filter di notes. filtrare, quindi, ogni singola note di notes e restituire il valore se done === false. (entrando su TODOS (che si trova all'interno delle due NOTE) e a sua volta si entra su ogni singolo di TODO di TODOS per capire se il DONE (di ogni todo) è effettivamente false, se almneno uno dei 3 lo è la funzione è true = la condizione viene rispettata e quindi verrà restituto il valore alla funzione) */


    /* -- SOME -- verifica se almeno un elemento di un array è true. ritorna un booleano ( se QUALCUNO la rispetta ritorna true)
    -- EVERY -- controlla se tutti gli elementi rispettano la condizione gli che stiamo dando (se TUTTI la rispettano)*/
  });
};

const notes = [
  {
    id: 1,
    description: 'Workout program',
    todos: [
      {
        id: 1,
        name: 'Push ups - 10 x 3',
        done: false
      },
      {
        id: 2,
        name: 'Abdominals - 20 x 3',
        done: true
      },
      {
        id: 3,
        name: 'Tapis Roulant - 15min',
        done: true
      }
    ]
  },
  {
    id: 2,
    description: 'Front-end Roadmap',
    todos: [
      {
        id: 1,
        name: 'Learn HTML',
        done: true
      },
      {
        id: 2,
        name: 'Learn CSS',
        done: true
      },
      {
        id: 3,
        name: 'Learn JavaScript',
        done: true
      },
      {
        id: 4,
        name: 'Learn Angular',
        done: true
      }
    ]
  }
]

const notesInProgress = uncompletedNotes(notes);
console.log('All notes: ', notes);
console.log('Notes In Progress: ', notesInProgress);