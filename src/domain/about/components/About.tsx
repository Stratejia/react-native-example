import React, { memo, useCallback } from 'react';
import { Linking } from 'react-native';
import { STRATEJIA_URL } from 'react-native-dotenv';
import { Trans } from 'react-i18next';
import { Link, Body1 } from '../../../components/typography';
import { Card, CardContent } from '../../../components/surfaces';

function About() {
  const handlePress = useCallback(() => {
    Linking.openURL(STRATEJIA_URL);
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
