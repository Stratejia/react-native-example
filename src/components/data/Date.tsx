import React from 'react';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
dayjs.extend(localizedFormat);

type Props = {
  readonly children: dayjs.ConfigType;
};

function Date({ children }: Props) {
  return <>{dayjs(Number(children)).format('LLL')}</>;
}

export default Date;
