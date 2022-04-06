import React, { ComponentProps } from 'react';
import { FontAwesome } from '@expo/vector-icons';

type Props = {
  name: ComponentProps<typeof FontAwesome>['name'];
  color: string;
};

function TabBarIcon(props: Props) {
  return <FontAwesome size={30} {...props} />;
}

export default TabBarIcon;
