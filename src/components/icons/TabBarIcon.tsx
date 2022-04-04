import { FontAwesome } from '@expo/vector-icons';
import { ComponentProps } from 'react';

declare type Props = {
  name: ComponentProps<typeof FontAwesome>['name'];
  color: string;
}

function TabBarIcon(props: Props) {
  // TODO: Never use negative margins
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

export default TabBarIcon;
