# Translations

We use [i18next](https://www.i18next.com/) and [react-i18next](https://react.i18next.com) for our translations.

They are located in the [`locales`](../src/locales) folder.

As you'll see, they are pretty simple: each locale has its own folder, with its translations separated into namespaces.

**Please, make sure your keys always reflect the english translation. For instance, prefer "home" instead of "pageTitle"
if the translation is "Home".**

To use a `common` translation, you can simply:

```ts
const { t } = useTranslation();

const myText = t('myText');
```

To use another namespace, you can then do:

```ts
const { t } = useTranslation('myNamespace');

const myText = t('myTextWithinThisNamespace');
```

If you need multiple namespaces:

```ts
const { t } = useTranslation(['myNamespace', 'myOtherNamespace']);

const myText = t('myNamespace:myTextWithinThisNamespace');
const myOtherText = t('myOtherNamespace:myTextWithinThisOtherNamespace');
```

For more complex usages, see the [`Trans` component](https://react.i18next.com/latest/trans-component).
