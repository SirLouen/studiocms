const en = ({
  'core-web-vitals': {
    title: 'Métricas web principales'
  },
  '@page/analytics': {
    title: 'Analíticas y métricas web',
    description: 'Consulta las métricas web principales y las analíticas de tu sitio.',
    'page-header': 'Analíticas y métricas web',
    'core-vitals.summary.header': 'Resumen de métricas web principales',
    'core-vitals.by-route.header': 'Métricas web principales por ruta',
    'core-vitals.by-route.table.th1': 'Ruta',
    'core-vitals.by-route.table.th2': 'Válido?',
    'core-vitals.by-route.table.th3': 'LCP',
    'core-vitals.by-route.table.th4': 'INP',
    'core-vitals.by-route.table.th5': 'CLS',
    'analytics.summary.header': 'Analíticas',
    'analytics.table.th1': 'Ruta de la página',
    'analytics.table.th2': 'Vistas (24 horas)',
    'analytics.table.th3': 'Vistas (7 días)',
    'analytics.table.th4': 'Vistas (30 días)',
    'analytics.table.th5': 'Vistas (histórico)'
  }
} as const);
export default en;