let translations = {
  'en': {
    daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    limit: 'Limit reached ({{limit}} items max).',
    loading: 'Loading...',
    minLength: 'Min. Length',
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    notSelected: 'Nothing Selected',
    required: 'Required',
    search: 'Search'
  },
  'cs': {
    daysOfWeek: ['Ne', 'Po', 'Út', 'St', 'Čt', 'Pá', 'So'],
    limit: 'Limit reached ({{limit}} items max).',
    loading: 'Loading...',
    minLength: 'Min. Length',
    months: ['Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec'],
    notSelected: 'Nothing Selected',
    required: 'Required',
    search: 'Search'
  },
  'sk': {
    daysOfWeek: ['Ne', 'Po', 'Ut', 'St', 'Št', 'Pi', 'So'],
    limit: 'Limit reached ({{limit}} items max).',
    loading: 'Loading...',
    minLength: 'Min. Length',
    months: ['Január', 'Február', 'Marec', 'Apríl', 'Máj', 'Jún', 'Júl', 'August', 'September', 'Október', 'November', 'December'],
    notSelected: 'Nothing Selected',
    required: 'Required',
    search: 'Search'
  },
  'pl': {
    daysOfWeek: ['Nd', 'Pn', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob'],
    limit: 'Limit reached ({{limit}} items max).',
    loading: 'Loading...',
    minLength: 'Min. Length',
    months: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
    notSelected: 'Nothing Selected',
    required: 'Required',
    search: 'Search'
  },
  'ua': {
    daysOfWeek: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    limit: 'Limit reached ({{limit}} items max).',
    loading: 'Loading...',
    minLength: 'Min. Length',
    months: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'],
    notSelected: 'Nothing Selected',
    required: 'Required',
    search: 'Search'
  }
}

export default function getTranslation (lang) {
  if (typeof window.VueCalendarLang === 'function' && !translations[lang]) {
    let translation = window.VueCalendarLang(lang)
    if (translation) {
      translations[lang] = translation
    }
  }
  return translations[lang] ? translations[lang] : translations['en']
}
