import { CAT_FACTS_BASE_URL } from 'react-native-dotenv';
import axios from 'axios';
import getFeaturesEnv from '../../../config/features-env';
import type { CreateCatFactParams } from '../schemas/facts';

const endpoint = `${CAT_FACTS_BASE_URL}/facts`;

async function createCatFactWithEndpoint(createCatFactParams: CreateCatFactParams) {
  const response = await axios.post(endpoint, createCatFactParams);
  return response.data;
}

function createCatFact(createCatFactParams: CreateCatFactParams) {
  return getFeaturesEnv().useRealCatFacts ? createCatFactWithEndpoint(createCatFactParams) : Promise.resolve();
}

export default createCatFact;
