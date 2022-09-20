import React, { memo } from 'react';
import { ActivityIndicator } from 'react-native';
import { useMutation } from 'react-query';
import { useTranslation } from 'react-i18next';
import CardContent from '../../../components/surfaces/CardContent';
import Card from '../../../components/surfaces/Card';
import Error from '../../../components/feedback/Error';
import createCatFact from '../api/createCatFact';
import type { SaveCatFactParams } from '../schemas/catFacts';
import CatFactForm from './CatFactForm';

function CreateCatFact() {
  const { t } = useTranslation('cats');
  const { mutate, isLoading, isError } = useMutation(createCatFact);

  // TODO(#8): on error, show snackbar (remove Error text)
  // TODO(#8): on success, show snackbar

  function handleSubmit(params: SaveCatFactParams) {
    mutate(params);
  }

  return (
    <Card>
      <CardContent>
        {isLoading && <ActivityIndicator />}
        {isError && <Error text={t('couldNotCreateCatFact')} />}
        {!isLoading && !isError && <CatFactForm onSubmit={handleSubmit} />}
      </CardContent>
    </Card>
  );
}

export default memo(CreateCatFact);