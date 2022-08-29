import React, { memo } from 'react';
import { ActivityIndicator } from 'react-native';
import { useMutation } from 'react-query';
import { useTranslation } from 'react-i18next';
import CardContent from '../../../components/surfaces/CardContent';
import Card from '../../../components/surfaces/Card';
import Error from '../../../components/feedback/Error';
import createCatFact from '../api/createCatFact';

function CreateCatFact() {
  const { t } = useTranslation('cats');
  const { mutate, isLoading, isError } = useMutation(createCatFact);

  // TODO(#8): on error, show snackbar (remove Error text)
  // TODO(#8): on success, show snackbar

  // TODO: Add actual cat form (other component)
  // TODO: isLoading should be send to form component (loading spinner on submit button)
  //       Or......... we could have a context for having a full-screen darkening effect + spinner
  return (
    <Card>
      <CardContent>
        {isLoading && <ActivityIndicator />}
        {isError && <Error text={t('couldNotCreateCatFact')} />}
        {!isLoading && !isError && <></>}
      </CardContent>
    </Card>
  );
}

export default memo(CreateCatFact);
