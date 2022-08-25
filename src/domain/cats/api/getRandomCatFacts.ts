import { CAT_FACTS_BASE_URL } from 'react-native-dotenv';
import axios from 'axios';
import mockedCatFacts from '../mocks/catFacts';
import getFeaturesEnv from '../../../config/features-env';
import type { AnimalFact } from '../../../types/cats';

const endpoint = `${CAT_FACTS_BASE_URL}/facts/random`;
const amount = 3;

function getEndpoint() {
  return `${endpoint}?&amount=${amount}`;
}

async function getRandomCatFactsFromEndpoint() {
  const response = await axios.get<readonly AnimalFact[]>(getEndpoint());
  return response.data;
}

function getRandomCatFacts() {
  return getFeaturesEnv().useRealCatFacts ? getRandomCatFactsFromEndpoint() : mockedCatFacts;
}

export default getRandomCatFacts;
