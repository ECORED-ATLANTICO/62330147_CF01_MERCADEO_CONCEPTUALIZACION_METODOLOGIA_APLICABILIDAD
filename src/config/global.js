export default {
  global: {
    Name: 'Diagnóstico y segmentación',
    Description:
      'El componente formativo aborda los fundamentos del diagnóstico del entorno, el análisis estratégico del mercado y la segmentación, integrando herramientas que permiten identificar oportunidades comerciales y seleccionar mercados objetivo, fortaleciendo la toma de decisiones empresariales basada en información estratégica confiable.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos del mercado',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '1.1', titulo: 'Concepto', hash: 't_1_1' },
          { numero: '1.2', titulo: 'Estructura y tipos', hash: 't_1_2' },
          {
            numero: '1.3',
            titulo: 'Mercado, empresa y consumidor',
            hash: 't_1_3',
          },
          { numero: '1.4', titulo: 'Análisis de información', hash: 't_1_4' },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Entorno organizacional',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '2.1', titulo: 'Macroentorno', hash: 't_2_1' },
          { numero: '2.2', titulo: 'Microentorno', hash: 't_2_2' },
          { numero: '2.3', titulo: 'Decisiones comerciales', hash: 't_2_3' },
          { numero: '2.4', titulo: 'Fuentes de información', hash: 't_2_4' },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Diagnóstico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Direccionamiento estratégico',
            hash: 't_3_1',
          },
          { numero: '3.2', titulo: 'Concepto y propósito', hash: 't_3_2' },
          { numero: '3.3', titulo: 'Técnicas de análisis', hash: 't_3_3' },
          { numero: '3.4', titulo: 'Análisis DOFA', hash: 't_3_4' },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Segmentación de mercados',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '4.1', titulo: 'Concepto y objetivos', hash: 't_4_1' },
          { numero: '4.2', titulo: 'Variables', hash: 't_4_2' },
          { numero: '4.3', titulo: 'Técnicas', hash: 't_4_3' },
          { numero: '4.4', titulo: 'Selección del mercado', hash: 't_4_4' },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Comercialización y distribución',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '5.1', titulo: 'Estructura', hash: 't_5_1' },
          { numero: '5.2', titulo: 'Canales de distribución', hash: 't_5_2' },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Integración',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '6.1', titulo: 'Entorno y segmentación', hash: 't_6_1' },
          { numero: '6.2', titulo: 'Diagnóstico', hash: 't_6_2' },
          { numero: '6.3', titulo: 'Informes', hash: 't_6_3' },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      /*
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      */
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA1_62330147_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  /*
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: '',
    },
  ],
  */
  glosario: [
    {
      termino: '<em>Benchmarking</em>',
      significado:
        'Comparación de procesos empresariales con líderes del sector para mejorar desempeño.',
    },
    {
      termino: 'Canal de distribución',
      significado:
        'Ruta mediante la cual el producto llega al consumidor final.',
    },
    {
      termino: 'Diagnóstico estratégico',
      significado:
        'Análisis de factores internos y externos que afectan la competitividad organizacional.',
    },
    {
      termino: 'Entorno empresarial',
      significado:
        'Conjunto de factores externos que influyen en el desempeño de la organización.',
    },
    {
      termino: 'Matriz DOFA',
      significado:
        'Herramienta que analiza fortalezas, oportunidades, debilidades y amenazas organizacionales.',
    },
    {
      termino: 'Mercado objetivo',
      significado:
        'Segmento seleccionado por la empresa para dirigir sus estrategias comerciales.',
    },
    {
      termino: 'Mercado potencial',
      significado:
        'Conjunto de consumidores con capacidad y disposición de compra.',
    },
    {
      termino: 'Segmentación',
      significado:
        'Proceso de dividir el mercado en grupos homogéneos de consumidores con características y necesidades similares.',
    },
    {
      termino: 'Sistema de comercialización',
      significado:
        'Conjunto de actores y procesos involucrados en la distribución de productos.',
    },
    {
      termino: 'Variable demográfica',
      significado:
        'Característica poblacional como edad, género o ingreso utilizada en segmentación.',
    },
  ],
  referencias: [
    {
      referencia:
        'Kotler, P., & Armstrong, G. (2013). <em>Fundamentos de Marketing. Páginas 162 a 168</em>. Pearson.',
      link:
        'https://frrq.cvg.utn.edu.ar/pluginfile.php/14584/mod_resource/content/1/Fundamentos%20del%20Marketing-Kotler.pdf',
    },
    {
      referencia:
        'Universidad Nacional Autónoma de México. (2020). <em>Segmentación de mercados: la clave para el éxito en la promoción turística</em>. UNAM ',
      link:
        'https://www.turisme.gva.es/ojs/index.php/Papers/article/view/205/172',
    },
    {
      referencia:
        'Quiroa, M. (s. f.). <em>Análisis DAFO: qué es y cómo puede ayudarte a triunfar</em>. Economipedia.',
      link: 'https://economipedia.com/definiciones/analisis-dafo.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de la línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nicolas Cruz Ríos',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jair Enrique Coll Gallardo',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Donado Molinares',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
