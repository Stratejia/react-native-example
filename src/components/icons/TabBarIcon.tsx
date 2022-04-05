import { ComponentProps } from 'react';
import { StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

type Props = {
  name: ComponentProps<typeof FontAwesome>['name'];
  color: string;
};

function TabBarIcon(props: Props) {
  return <FontAwesome size={30} style={styles.icon} {...props} />;
}

// TODO: Never use negative margins
const styles = StyleSheet.create({
  icon: {
    marginBottom: -3,
  },
});

export default TabBarIcon;
