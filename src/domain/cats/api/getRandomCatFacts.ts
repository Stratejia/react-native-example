import { CAT_FACTS_BASE_URL } from 'react-native-dotenv';
import axios from 'axios';
import mockedCatFacts from '../mocks/catFacts';
import getFeaturesEnv from '../../../config/features-env';
import type { AnimalFact } from '../../../types/cats';

const endpoint = `${CAT_FACTS_BASE_URL}/facts/random`;
const animalType = 'cat';
const amount = 3;

function getEndpoint() {
  return `${endpoint}?animal_type=${animalType}&amount=${amount}`;
}

async function getRandomCatFacts() {
  return getFeaturesEnv().useRealCatFacts
    ? axios.get(getEndpoint()).then(res => res.data as readonly AnimalFact[])
    : mockedCatFacts;
}

export default getRandomCatFacts;
