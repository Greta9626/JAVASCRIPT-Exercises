function createStore() {
  const store = [];

  return articoli => {
    store.push(articoli);
    console.log(articoli);
  }
  
}

const redPants = { id: 1, name: 'Red Pants' };
const whiteHat = { id: 2, name: 'White Hat' };
const blackSneakers = { id: 3, name: 'Black Sneakers' };

console.log('--- Dress Store ---');
const dressStore = createStore(); // a questa costannte viene assegnato il return della funzione createStore (diventando praticamente la funzione)
dressStore(redPants); //il paramentro redPants (sopra è un oggetto assegnato alla costante) va a sostituire articoli, cioè: redPants => { store.push(redPants)}
dressStore(whiteHat)

console.log('--- Shoes Store ---');
const shoesStore = createStore();
shoesStore(blackSneakers);