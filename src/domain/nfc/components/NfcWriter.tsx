import React, { useCallback, useState } from 'react';
import { ActivityIndicator, Button, StyleSheet, TextInput } from 'react-native';
import { useMutation } from 'react-query';
import { View } from '../../../components/layouts';
import { Text } from '../../../components/typography';
import writeNdef from '../utils/writeNdef';

function NfcWriter() {
  const { mutate, isLoading, error } = useMutation(writeNdef);
  const [text, onChangeText] = useState('');

  console.log(error);

  const handlePress = useCallback(() => {
    if (text && text !== '') {
      mutate(text);
    }
  }, [text, mutate]);

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Button
        onPress={handlePress}
        title="Write a tag"
        accessibilityLabel="Write a tag"
      />
      {isLoading ? <ActivityIndicator /> : null}
      {error ? <Text>{`ERROR: ${error}`}</Text> : null}
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
    minWidth: 120,
    margin: 12,
    borderColor: '#fff',
    borderWidth: 1,
    padding: 10,
  },
});

export default NfcWriter;
