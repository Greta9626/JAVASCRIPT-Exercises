const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};


// rinominazione in fase di destrutturazione:
const { id, firstName: name, lastName: surname, age: old } = person;

console.log(id, name, surname, old);

//sistemare il codice pur mantendno gli stessi nomi di proprietà per l'oggetto person, quindi fare una rinominazione in fase di destrutturazione