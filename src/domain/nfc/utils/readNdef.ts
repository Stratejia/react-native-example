import NfcManager, { NfcTech } from 'react-native-nfc-manager';

async function readNdef() {
  await NfcManager.requestTechnology(NfcTech.Ndef);
  const tag = await NfcManager.getTag();
  await NfcManager.cancelTechnologyRequest();

  return tag?.toString();
}

export default readNdef;
