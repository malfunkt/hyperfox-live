/* This will setup the i18n language files and locale data for hiperfox */
import { addLocaleData } from 'react-intl'

import enLocaleData from 'react-intl/locale-data/en'
import esLocaleData from 'react-intl/locale-data/es'

export const appLocales = [
  'en',
  'es'
]

import enTranslationMessages from './translations/en.json'
import esTranslationMessages from './translations/es.json'

addLocaleData(enLocaleData)
addLocaleData(esLocaleData)

const formatTranslationMessages = (messages) => {
  const formattedMessages = {}
  for (const message of messages) {
    formattedMessages[message.id] = message.message || message.defaultMessage
  }

  return formattedMessages
}

export const translationMessages = {
  en: formatTranslationMessages(enTranslationMessages),
  es: formatTranslationMessages(esTranslationMessages)
}
