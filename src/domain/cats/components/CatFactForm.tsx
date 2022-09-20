import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import type { SubmitHandler } from 'react-hook-form';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import TextInput from '../../../components/inputs/TextInput';
import Button from '../../../components/inputs/Button';
import type { SaveCatFactParams } from '../schemas/catFacts';
import { saveCatFactParamsSchema } from '../schemas/catFacts';

type Props = {
  readonly onSubmit: SubmitHandler<SaveCatFactParams>;
};

function CatFactForm({ onSubmit }: Props) {
  const { t } = useTranslation('cats');
  const { control, handleSubmit } = useForm<SaveCatFactParams>({
    resolver: zodResolver(saveCatFactParamsSchema),
    defaultValues: {
      username: '',
      text: '',
    },
  });

  return (
    <>
      <Controller
        control={control}
        name="username"
        render={({ field, fieldState: { error } }) => (
          <TextInput placeholder={t('form.username')} error={error?.message} {...field} />
        )}
      />
      <Controller
        control={control}
        name="text"
        render={({ field, fieldState: { error } }) => (
          <TextInput placeholder={t('form.text')} error={error?.message} {...field} />
        )}
      />
      <Button title={t('form.save')} onPress={handleSubmit(onSubmit)} />
    </>
  );
}

export default memo(CatFactForm);
