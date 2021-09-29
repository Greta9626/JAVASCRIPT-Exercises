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
    }, 1000)})
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
    }, 500)})
}

Promise.race([ fetchPersonById(2), fetchJobById(3)]) //Promise.race riporta la prima promise risolta
  .then((result) => console.log(result))
  .catch((err) => console.error(err));