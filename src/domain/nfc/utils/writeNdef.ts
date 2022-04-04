import NfcManager, { NfcTech, Ndef } from 'react-native-nfc-manager';

async function writeNdef(text: string) {
  let result = false;

  try {
    await NfcManager.requestTechnology(NfcTech.Ndef);

    const bytes = Ndef.encodeMessage([Ndef.textRecord(text)]);

    if (bytes) {
      await NfcManager.ndefHandler.writeNdefMessage(bytes);
      result = true;
    }
  } catch (ex) {
    console.warn(ex);
  } finally {
    await NfcManager.cancelTechnologyRequest();
  }

  return result;
}

export default writeNdef;
