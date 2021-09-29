const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

const fetchPersonById = id => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const findPerson = persons.find(person => person.id === id);
      if(findPerson) {
        resolve(findPerson);
      }else {
        reject('questa persona non esiste');
      }
    }, 2000)})
};

const fetchJobById = id => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const findJob = jobs.find(job => job.id === id);
      if(findJob) {
        resolve(findJob);
      }else {
        reject('questo lavoro non esiste');
      }
    }, 1000)})
}


Promise.all([fetchPersonById(2), fetchJobById(4)]) //promise all crea un array con dentro le due funzioni
  .then((result) => console.log(result)) //result comprende entrambe le funzioni contenute nell array
  .catch((err) => console.error(err)); //mi passa l'errore della funzione reject


/* fetchPersonById(2) 
  .then((person) => {
    console.log(person);
    fetchJobById(2) 
      .then((job) => console.log(job))
      .catch((err) => console.error(err));
  })
  .catch((err) => console.error(err)); */




