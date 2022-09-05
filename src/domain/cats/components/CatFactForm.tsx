import React, { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import type { SubmitHandler } from 'react-hook-form';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import TextInput from '../../../components/inputs/TextInput';
import Button from '../../../components/inputs/Button';
// TODO: See if wanted, this is for error display
// import Caption from '../../../components/typography/Caption';
import type { SaveCatFactParams } from '../schemas/catFacts';
import { saveCatFactParamsSchema } from '../schemas/catFacts';

type Props = {
  readonly onSubmit: SubmitHandler<SaveCatFactParams>;
};

function CatFactForm({ onSubmit }: Props) {
  const { t } = useTranslation('cats');
  const { control, handleSubmit, formState } = useForm<SaveCatFactParams>({
    resolver: zodResolver(saveCatFactParamsSchema),
    defaultValues: {
      username: '',
      text: '',
    },
  });

  function handleFormSubmit() {
    handleSubmit(onSubmit);
  }

  // TODO: Remove error logs
  useEffect(() => {
    console.log(formState);
  }, [formState]);

  // TODO: VALIDATION NOT WORKING, TO FIX (formState never updates?)
  // TODO: Move form inputs to their own components -> https://blog.logrocket.com/build-better-forms-with-react-native-ui-components
  // TODO: Better display of errors (i18n)
  // {isDirty && !isValid && <Caption>{JSON.stringify(errors)}</Caption>}
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
      <Button title={t('form.save')} onPress={handleFormSubmit} />
    </>
  );
}

export default memo(CatFactForm);
