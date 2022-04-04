import { useCallback, useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { View } from '../../../components/layouts';
import { Text } from '../../../components/typography';
import writeNdef from '../utils/writeNdef';

function NfcWriter() {
  const [text, onChangeText] = useState('');

  const handlePress = useCallback(() => {
    if (text && text !== '') {
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
    color: '#fff',
    height: 40,
    margin: 12,
    borderColor: '#fff',
    borderWidth: 1,
    padding: 10,
  },
});

export default NfcWriter;
