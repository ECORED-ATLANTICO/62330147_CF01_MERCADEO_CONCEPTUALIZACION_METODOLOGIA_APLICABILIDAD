<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Entorno organizacional

    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema2/img_1.png', class="img-fluid")
      .col-12.col-lg-9.mb-0
        p.mb-3(data-aos="zoom-in-right") El entorno organizacional se define como el conjunto de factores externos que influyen directa o indirectamente en el funcionamiento de la empresa y en su desempeño competitivo; estos factores condicionan las oportunidades de crecimiento, los riesgos del mercado y las decisiones estratégicas relacionadas con productos, precios, distribución y comunicación (Daft, 2020).
        .row.justify-content-center.align-items-center.mb-3
          .col-12.col-lg-11.order-2.order-lg-1(data-aos="zoom-in-right")
            .tarjeta.color-acento-botones-cv.p-4.rounded-3.mb-0(data-aos="zoom-in-right")
              p.mb-0 Por ejemplo, cambios en la legislación tributaria pueden modificar los costos operativos de las empresas, mientras que el desarrollo de nuevas tecnologías puede generar oportunidades para la innovación de productos y servicios. La capacidad de adaptación a estas condiciones externas determina en gran medida la sostenibilidad empresarial.
          .col-3.col-lg-1.order-1.order-lg-2.mb-3.mb-lg-0.p-0(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/tema2/img_2.svg', class="img-fluid")
        p.mb-3(data-aos="zoom-in-right") En este capítulo se estudiarán las principales variables del entorno empresarial, diferenciando entre el macroentorno y el microentorno, así como su impacto en el comportamiento del mercado y en la competitividad de las organizaciones.

    Separador

    #t_2_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.1 Macroentorno
    .mb-0 

    .tarjeta--bg-img.color-acento-contenido-cv.rounded-3.p-0.mb-5.overflow-hidden(data-aos="fade-right")
      .row.justify-content-center.align-items-center.mb-0.h-100
        .col-12.col-lg-7.p-5
          .col-4.col-lg-2.mb-3(data-aos="zoom-in-right")
            figure
              img(src='@/assets/curso/tema2/img_3.svg', class="img-fluid")
          p.mb-4 El macroentorno está compuesto por factores externos que afectan a todas las organizaciones de una economía y que generalmente no pueden ser controlados por las empresas, entre los principales componentes del macroentorno se encuentran los factores económicos, demográficos, tecnológicos, socioculturales, políticos y ambientales.
          p.mb-0 Por ejemplo, el crecimiento del comercio digital ha sido impulsado por avances tecnológicos y cambios en los hábitos de consumo, obligando a las empresas tradicionales a incorporar plataformas de comercio electrónico para mantener su competitividad. El análisis del macroentorno permite anticipar tendencias y preparar estrategias de adaptación.
        .col-12.col-lg-5.mb-lg-0.mb-3.p-0.align-self-stretch.d-none.d-lg-block
          figure.p-0.m-0.h-100
            img(src="@/assets/curso/tema2/img_4.png" class="img-fluid w-100 h-100 object-fit-cover").p-0

    .subtitulo-destacado.mb-5(data-aos="zoom-in-right")
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto Componentes del macroentorno
    
    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema2/img_6.png', class="img-fluid")
      .col-12.col-lg-9.mb-0
        .row.align-items-stretch.mb-0
          .col-12.col-md-6.col-lg-4.mb-3(data-aos="zoom-in-right")
            .tarjeta.color-acento-contenido-cv.p-4.rounded-4.mb-0.h-100.d-flex.align-items-center.justify-content-center
              .row.justify-content-center.align-items-center.mb-0
                .col-4.col-lg-4.mb-0
                  figure
                    img(src='@/assets/curso/tema2/img_7.svg', class="img-fluid")
                .col-12.col-lg-8.mb-0
                  h5.mb-3 Económico
                  p.mb-0 Inflación, tasas de interés, empleo.
          .col-12.col-md-6.col-lg-4.mb-3(data-aos="zoom-in-right")
            .tarjeta.color-acento-contenido-cv.p-4.rounded-4.mb-0.h-100.d-flex.align-items-center.justify-content-center
              .row.justify-content-center.align-items-center.mb-0
                .col-4.col-lg-4.mb-0
                  figure
                    img(src='@/assets/curso/tema2/img_8.svg', class="img-fluid")
                .col-12.col-lg-8.mb-0
                  h5.mb-3 Tecnológico
                  p.mb-0 Innovación digital, automatización.
          .col-12.col-md-6.col-lg-4.mb-3(data-aos="zoom-in-right")
            .tarjeta.color-acento-contenido-cv.p-4.rounded-4.mb-0.h-100.d-flex.align-items-center.justify-content-center
              .row.justify-content-center.align-items-center.mb-0
                .col-4.col-lg-4.mb-0
                  figure
                    img(src='@/assets/curso/tema2/img_9.svg', class="img-fluid")
                .col-12.col-lg-8.mb-0
                  h5.mb-3 Sociocultural
                  p.mb-0 Cambios en estilos de vida.
          .col-12.col-md-6.col-lg-4.mb-3(data-aos="zoom-in-right")
            .tarjeta.color-acento-contenido-cv.p-4.rounded-4.mb-0.h-100.d-flex.align-items-center.justify-content-center
              .row.justify-content-center.align-items-center.mb-0
                .col-4.col-lg-4.mb-0
                  figure
                    img(src='@/assets/curso/tema2/img_10.svg', class="img-fluid")
                .col-12.col-lg-8.mb-0
                  h5.mb-3 Político-legal
                  p.mb-0 Regulaciones, normas comerciales.
          .col-12.col-md-6.col-lg-4.mb-3(data-aos="zoom-in-right")
            .tarjeta.color-acento-contenido-cv.p-4.rounded-4.mb-0.h-100.d-flex.align-items-center.justify-content-center
              .row.justify-content-center.align-items-center.mb-0
                .col-4.col-lg-4.mb-0
                  figure
                    img(src='@/assets/curso/tema2/img_11.svg', class="img-fluid")
                .col-12.col-lg-8.mb-0
                  h5.mb-3 Ambiental
                  p.mb-0 Sostenibilidad, recursos naturales.

    Separador

    #t_2_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.2 Microentorno
    .mb-0 

    .bloque-texto-g.bloque-texto-g--inverso.color-primario-v.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img_12.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El microentorno está conformado por los actores cercanos a la empresa que influyen directamente en su capacidad para servir al mercado, incluye clientes, competidores, proveedores, intermediarios y públicos de interés. A diferencia del macroentorno, las organizaciones pueden influir parcialmente en algunos de estos elementos mediante estrategias comerciales y relaciones estratégicas (Ferrell & Hartline, 2021).

    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-10.mb-0
        .cajon.color-acento-botones.p-4(data-aos="zoom-in-right")
          p.mb-0 Un ejemplo se observa en empresas que establecen alianzas estratégicas con proveedores para asegurar calidad constante y reducción de costos logísticos, estas relaciones fortalecen la competitividad empresarial y mejoran la eficiencia operativa.

    Separador

    #t_2_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.3 Decisiones comerciales
    .mb-0 

    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-4.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema2/img_13.png', class="img-fluid")
      .col-12.col-lg-8.mb-0 
        p.mb-3(data-aos="zoom-in-right") El análisis sistemático del entorno permite a las organizaciones identificar oportunidades de mercado, anticipar amenazas competitivas y diseñar estrategias coherentes con las condiciones externas. Herramientas como el análisis PESTEL y el análisis de las cinco fuerzas de Porter facilitan la evaluación estructurada de factores externos relevantes.
        .row.justify-content-center.align-items-center.mb-0
          .col-4.col-lg-1.mb-3.mb-lg-0.p-1(data-aos="zoom-in-right")
            figure
              img(src='@/assets/curso/tema2/img_14.svg', class="img-fluid")
          .col-12.col-lg-11.mb-0
            p.mb-3(data-aos="zoom-in-right") Por ejemplo, antes de ingresar a un nuevo mercado internacional, una empresa evalúa regulaciones legales, comportamiento del consumidor, nivel de competencia y condiciones económicas, reduciendo la incertidumbre asociada a la inversión. Este proceso demuestra que la comprensión del entorno organizacional es un requisito indispensable para la planificación estratégica.

    Separador

    #t_2_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.4 Decisiones comerciales
    .mb-0 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-9.mb-0.order-2.order-lg-1
        p.mb-3(data-aos="zoom-in-right") Las fuentes de información del entorno corresponden a los mecanismos mediante los cuales la empresa obtiene datos relevantes sobre las condiciones económicas, sociales, tecnológicas, competitivas y legales del mercado; estas fuentes permiten sustentar el diagnóstico estratégico y reducir la incertidumbre en la toma de decisiones empresariales (Malhotra, 2019).
        .tarjeta.color-acento-botones-cv.p-4.rounded-3.mb-0(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-3.col-lg-1.mb-3.mb-lg-0(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/tema2/img_15.svg', class="img-fluid")
            .col-12.col-lg-11(data-aos="zoom-in-right")
              p.mb-0 Las organizaciones pueden utilizar fuentes primarias y secundarias. Las fuentes primarias incluyen encuestas, entrevistas, observación directa y grupos focales, los cuales proporcionan información específica diseñada para resolver necesidades concretas de investigación. Por su parte, las fuentes secundarias comprenden informes gubernamentales, bases de datos estadísticas, estudios sectoriales, publicaciones académicas y reportes de organismos internacionales, los cuales permiten comprender tendencias generales del mercado con menor costo y tiempo de obtención.
      .col-8.col-lg-3.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema2/img_16.png', class="img-fluid")

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/tema2/img_17.png')
      .bloque-texto-t__texto.col-10.mb-0
        p.mb-0 El uso combinado de ambos tipos de fuentes mejora la confiabilidad del análisis estratégico, ya que la información secundaria proporciona el contexto general del mercado mientras la información primaria permite validar percepciones reales del consumidor. Por ejemplo, una empresa que desea ingresar a un mercado internacional puede utilizar estadísticas de comercio exterior (fuente secundaria) y posteriormente aplicar encuestas a distribuidores locales (fuente primaria) para validar oportunidades comerciales.

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-lg-12.mb-3
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          |    Tipos de fuentes de información del entorno
        figure(data-aos="flip-left")
          img(src='@/assets/curso/tema2/img_18.svg', class="img-fluid d-none d-lg-block").mb-5
          img(src='@/assets/curso/tema2/img_19.svg', class="img-fluid d-block d-lg-none").mb-5
          figcaption Nota. SENA, (2026).

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10(data-aos="zoom-in-right")
        .cita-decorada.mb-5
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-1.p-5
            .row.justify-content-center.align-items-center.mb-lg-0.mb-5
              .col-7.col-lg-5.position-relative.order-2.order-lg-1.mb-0
                figure
                  img(src='@/assets/curso/tema2/img_20.png', class="cita-decorada__imagen-flotante-3")
              .col-10.col-lg-7.order-1.order-lg-2.mb-lg-0.mb-5
                .bloque-texto-b.cita-decorada__texto.mb-1.p-0
                  .bloque-texto-b__texto
                    i.fas.fa-quote-left
                    h5.mb-0 Las empresas que comprenden su entorno toman decisiones con visión; las que lo ignoran reaccionan demasiado tarde.
                    i.fas.fa-quote-right
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
