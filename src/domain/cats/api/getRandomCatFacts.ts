import axios from 'axios';
import mockedCatFacts from '../mocks/catFacts';
import getFeaturesEnv from '../../../config/features-env';
import { AnimalFact } from '../../../types/cats';

// TODO: Move base URL to env vars
const baseUrl = 'https://cat-fact.herokuapp.com';
const endpoint = `${baseUrl}/facts/random`;
const animalType = 'cat';
const amount = 3;

function getEndpoint() {
  return `${endpoint}?animal_type=${animalType}&amount=${amount}`;
}

async function getRandomCatFacts() {
  if (getFeaturesEnv().useRealCatFacts) {
    return axios.get(getEndpoint()).then(res => res.data as AnimalFact[]);
  } else {
    return mockedCatFacts;
  }
}

export default getRandomCatFacts;
