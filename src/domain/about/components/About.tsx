import React, { memo, useCallback } from 'react';
import { Linking } from 'react-native';
import { Trans } from 'react-i18next';
import { Link, Text } from '../../../components/typography';
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
        <Text>
          <Trans
            i18nKey="appDescription"
            ns="about"
            components={{
              externalLink: <Link onPress={handlePress} />,
            }}
          />
        </Text>
      </CardContent>
    </Card>
  );
}

export default memo(About);
