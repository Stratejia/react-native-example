import {useCallback, useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { View } from '../../../components/layout';
import { Text } from '../../../components/typography';
import writeNdef from '../utils/writeNdef';

function NfcWriter() {
  const [text, onChangeText] = useState<string>();

  const handlePress = useCallback(() => {
    if (text) {
      writeNdef(text);
    }
  }, [text]);

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TouchableOpacity onPress={handlePress}>
        <Text>Write a Tag</Text>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default NfcWriter;
