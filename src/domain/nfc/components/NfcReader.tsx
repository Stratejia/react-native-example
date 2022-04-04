import { useCallback, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { View } from '../../../components/layout';
import { Text } from '../../../components/typography';
import readNdef from '../utils/readNdef';

function NfcReader() {
  const [tag, setTag] = useState('');

  const handlePress = useCallback(() => {
    readNdef().then((readTag) => {
      if (readTag) {
        setTag(readTag);
      }
    });
  }, [setTag]);

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={handlePress}>
        <Text>Scan a Tag</Text>
        {tag && <Text>Read tag: {tag}</Text>}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NfcReader;
