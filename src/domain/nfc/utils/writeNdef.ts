import NfcManager, { NfcTech, Ndef } from 'react-native-nfc-manager';

async function writeNdef(text: string) {
  await NfcManager.requestTechnology(NfcTech.Ndef);
  const bytes = Ndef.encodeMessage([Ndef.textRecord(text)]);

  if (bytes) {
    await NfcManager.ndefHandler.writeNdefMessage(bytes);
  }

  await NfcManager.cancelTechnologyRequest();
}

export default writeNdef;
