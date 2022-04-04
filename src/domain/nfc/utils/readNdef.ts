import NfcManager, { NfcTech } from 'react-native-nfc-manager';

async function readNdef() {
  try {
    await NfcManager.requestTechnology(NfcTech.Ndef);
    const tag = await NfcManager.getTag();
    console.log('Tag found', tag);
    if (tag) {
      return tag.toString();
    }
  } catch (error) {
    console.error('Oops!', error);
  } finally {
    await NfcManager.cancelTechnologyRequest();
  }
}

export default readNdef;
