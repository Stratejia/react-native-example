import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import TextInput from '../../../components/inputs/TextInput';
import Button from '../../../components/inputs/Button';
import Caption from '../../../components/typography/Caption';
import type { SaveCatFactParams } from '../schemas/catFacts';
import { saveCatFactParamsSchema } from '../schemas/catFacts';

type Props = {
  readonly onSubmit: SubmitHandler<SaveCatFactParams>;
};

function CatFactForm({ onSubmit }: Props) {
  const { t } = useTranslation('cats');
  const {
    register,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm<SaveCatFactParams>({
    resolver: zodResolver(saveCatFactParamsSchema),
  });

  function handleFormSubmit() {
    handleSubmit(onSubmit);
  }

  // TODO: Sending trigger to onPress doesn't work
  // eslint-disable-next-line functional/prefer-tacit
  function handleSaveButtonPress() {
    return trigger();
  }

  // TODO: Better display of errors
  return (
    <form onSubmit={handleFormSubmit}>
      <TextInput placeholder={t('form.username')} {...register('username')} />
      <TextInput placeholder={t('form.text')} {...register('text')} />
      <Button title={t('form.save')} onPress={handleSaveButtonPress} />
      {errors && <Caption>{errors}</Caption>}
    </form>
  );
}

export default memo(CatFactForm);
