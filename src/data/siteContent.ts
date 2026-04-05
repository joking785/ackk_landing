export const navLinks = [
  { href: '#about', label: 'О нас' },
  { href: '#news', label: 'Новости' },
  { href: '#members', label: 'Участники' },
  { href: '#projects', label: 'Проекты' },
  { href: '#contacts', label: 'Контакты' },
] as const

export const partnerNames = [
  'Ростелеком',
  'Сбер',
  'Яндекс',
  'VK',
  '1С',
  'КРОК',
  'Лаборатория Касперского',
  'МТС',
]

export const digitalDevBullets = [
  'Стратегии цифровой трансформации для отраслей края',
  'Обмен опытом и лучшими практиками между участниками',
  'Совместные инициативы с органами власти и бизнесом',
  'Развитие кадрового потенциала и образовательных программ',
]

export const itSupportBullets = [
  'Инфраструктурные и облачные решения для предприятий',
  'Информационная безопасность и соответствие требованиям',
  'Сопровождение внедрения и интеграция систем',
  'Техническая поддержка и консалтинг 24/7',
]

export const projects = [
  {
    id: '1',
    title: 'Сельское хозяйство',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=520&fit=crop&q=80',
  },
  {
    id: '2',
    title: 'Умный город',
    image:
      'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=520&fit=crop&q=80',
  },
  {
    id: '3',
    title: 'Строительство',
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=520&fit=crop&q=80',
  },
  {
    id: '4',
    title: 'Промышленность',
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=520&fit=crop&q=80',
  },
  {
    id: '5',
    title: 'Логистика',
    image:
      'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&h=520&fit=crop&q=80',
  },
  {
    id: '6',
    title: 'Безопасность',
    image:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=520&fit=crop&q=80',
  },
] as const

export const members = [
  {
    id: 'm1',
    name: 'ООО «Кубань-Тех»',
    short: 'КТ',
    description:
      'Разработка корпоративных порталов, интеграция с госсистемами, аналитика данных.',
  },
  {
    id: 'm2',
    name: 'ИП «Северный ветер»',
    short: 'СВ',
    description:
      'Кибербезопасность, аудит ИТ-инфраструктуры, защита персональных данных.',
  },
  {
    id: 'm3',
    name: 'АО «Юг-Цифра»',
    short: 'ЮЦ',
    description:
      'Облачные сервисы, миграция в облако, резервное копирование для бизнеса.',
  },
  {
    id: 'm4',
    name: 'ООО «ДатаЛайн»',
    short: 'DL',
    description:
      'BI-аналитика, хранилища данных, машинное обучение для отраслей.',
  },
  {
    id: 'm5',
    name: 'ГК «Краснодар IT»',
    short: 'KIT',
    description:
      'Аутсорсинг ИТ, Service Desk, администрирование серверов и сетей.',
  },
  {
    id: 'm6',
    name: 'ООО «РегионСофт»',
    short: 'РС',
    description:
      'Внедрение ERP и CRM, автоматизация учёта, поддержка пользователей.',
  },
  {
    id: 'm7',
    name: 'ООО «ПромИнтеграция»',
    short: 'ПИ',
    description: 'IIoT, SCADA, цифровые двойники производственных линий.',
  },
  {
    id: 'm8',
    name: 'Стартап «AgroAPI»',
    short: 'AA',
    description:
      'API для агрохолдингов, спутниковая аналитика полей, прогноз урожайности.',
  },
  {
    id: 'm9',
    name: 'ООО «МобайлЮг»',
    short: 'МЮ',
    description:
      'Мобильные приложения для граждан и бизнеса, UX/UI, публикация в сторах.',
  },
] as const

export const solutions = [
  {
    id: 's1',
    title: 'Корпоративная аналитика',
    description:
      'Дашборды и отчёты в реальном времени для руководителей и операционных команд.',
    gradient:
      'linear-gradient(135deg, #f97316 0%, #f59e0b 45%, #ca8a04 100%)',
  },
  {
    id: 's2',
    title: 'Защищённая инфраструктура',
    description:
      'Сегментация сети, SIEM, соответствие требованиям регуляторов и отраслевым стандартам.',
    gradient:
      'linear-gradient(135deg, #14b8a6 0%, #06b6d4 50%, #059669 100%)',
  },
  {
    id: 's3',
    title: 'Облачная платформа',
    description:
      'IaaS/PaaS, Kubernetes, CI/CD — единая среда для разработки и эксплуатации.',
    gradient:
      'linear-gradient(135deg, #2563eb 0%, #6366f1 50%, #7c3aed 100%)',
  },
  {
    id: 's4',
    title: 'CRM для отделов продаж',
    description:
      'Воронки, скоринг лидов, интеграция с телефонией и мессенджерами.',
    gradient:
      'linear-gradient(135deg, #a855f7 0%, #d946ef 55%, #db2777 100%)',
  },
  {
    id: 's5',
    title: 'Документооборот',
    description:
      'Электронные согласования, ЭП, хранение и поиск договоров и актов.',
    gradient:
      'linear-gradient(135deg, #16a34a 0%, #10b981 50%, #0d9488 100%)',
  },
  {
    id: 's6',
    title: 'HR и обучение',
    description:
      'Онбординг сотрудников, LMS, оценка компетенций и планы развития.',
    gradient:
      'linear-gradient(135deg, #f43f5e 0%, #ef4444 45%, #ea580c 100%)',
  },
  {
    id: 's7',
    title: 'Геоаналитика',
    description:
      'Карты, тепловые зоны, маршрутизация и планирование логистики.',
    gradient:
      'linear-gradient(135deg, #0ea5e9 0%, #3b82f6 50%, #4f46e5 100%)',
  },
  {
    id: 's8',
    title: 'Маркетплейс услуг',
    description:
      'Каталог ИТ-услуг участников ассоциации с единой витриной для заказчиков.',
    gradient:
      'linear-gradient(135deg, #7c3aed 0%, #9333ea 50%, #c026d3 100%)',
  },
  {
    id: 's9',
    title: 'RPA-роботы',
    description:
      'Автоматизация рутинных операций в бухгалтерии, закупках и поддержке.',
    gradient:
      'linear-gradient(135deg, #d97706 0%, #f97316 50%, #dc2626 100%)',
  },
  {
    id: 's10',
    title: 'Видеоконференции',
    description:
      'Корпоративные комнаты, запись встреч, интеграция с календарями.',
    gradient:
      'linear-gradient(135deg, #0891b2 0%, #3b82f6 50%, #1d4ed8 100%)',
  },
  {
    id: 's11',
    title: 'E-commerce',
    description:
      'Интернет-магазины, оплата, складской учёт и доставка под ключ.',
    gradient:
      'linear-gradient(135deg, #84cc16 0%, #22c55e 50%, #047857 100%)',
  },
  {
    id: 's12',
    title: 'IoT-мониторинг',
    description:
      'Датчики, телеметрия, алерты и визуализация для объектов инфраструктуры.',
    gradient:
      'linear-gradient(135deg, #475569 0%, #64748b 50%, #3f3f46 100%)',
  },
] as const
