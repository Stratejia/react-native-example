import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import type { SubmitHandler } from 'react-hook-form';
import { useForm, Controller } from 'react-hook-form';
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
    control,
    handleSubmit,
    formState: { isDirty, isValid, errors },
  } = useForm<SaveCatFactParams>({
    resolver: zodResolver(saveCatFactParamsSchema),
    defaultValues: {
      username: '',
      text: '',
    },
  });

  // TODO: Better error handling
  return (
    <>
      <Controller
        control={control}
        name="username"
        render={({ field }) => <TextInput placeholder={t('form.username')} {...field} />}
      />
      <Controller
        control={control}
        name="text"
        render={({ field }) => <TextInput placeholder={t('form.text')} {...field} />}
      />
      <Button title={t('form.save')} onPress={handleSubmit(onSubmit)} />
      {isDirty && !isValid && <Caption>{JSON.stringify(errors)}</Caption>}
    </>
  );
}

export default memo(CatFactForm);
