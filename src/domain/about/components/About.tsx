import React, { memo, useCallback } from 'react';
import { Linking } from 'react-native';
import { Trans } from 'react-i18next';
import { Link, Body1 } from '../../../components/typography';
import { Card, CardContent } from '../../../components/surfaces';

// TODO: Move to env vars
const statejiaUrl = 'https://www.stratejia.ca';

function About() {
  const handlePress = useCallback(() => {
    Linking.openURL(statejiaUrl);
  }, []);

  return (
    <Card>
      <CardContent>
        <Body1>
          <Trans
            i18nKey="appDescription"
            ns="about"
            components={{
              externalLink: <Link onPress={handlePress} />,
            }}
          />
        </Body1>
      </CardContent>
    </Card>
  );
}

export default memo(About);
