# Usage of NFCs

We use [`react-native-nfc-manager`](https://github.com/revtel/react-native-nfc-manager) to handle NFCs.

We have two useful components to showcase the usage of NFCs.

- `NfcReader`
  - Accessible from bottom navigation bar, within the `NfcReaderScreen`
  - Reads NDEF type NFCs and displays the given text
  - Uses `readNdef` utility function
- `NfcWriter`
  - Accessible from bottom navigation bar, within the `NfcWriterScreen`
  - Writes NDEF type NFCs from given input text
  - Uses `writeNdef` utility function
