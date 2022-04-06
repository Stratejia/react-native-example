import React, { ComponentProps } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

type Props = {
  name: ComponentProps<typeof FontAwesome5>['name'];
  color: string;
};

function TabBarIcon(props: Props) {
  return <FontAwesome5 size={30} {...props} />;
}

export default TabBarIcon;
