<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Integración

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/tema6/img_1.png')
      .bloque-texto-t__texto.col-10.mb-0
        p.mb-0 El diagnóstico del entorno y la segmentación del mercado constituyen procesos complementarios dentro de la planeación estratégica de mercadeo. Mientras el diagnóstico permite comprender las condiciones internas y externas que afectan a la organización, la segmentación facilita la identificación de los grupos de consumidores con mayor potencial para el desarrollo de estrategias comerciales efectivas; la integración de ambos procesos garantiza decisiones estratégicas coherentes con la realidad del mercado.
    
    .row.justify-content-center.align-items-center.mb-0
      .col-3.col-lg-1.d-none.d-lg-block.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema6/img_2.svg', class="img-fluid")
      .col-12.col-lg-11(data-aos="zoom-in-right")
        p.mb-0 La correcta articulación entre diagnóstico y segmentación fortalece la formulación de planes de mercadeo orientados a resultados, ya que permite identificar oportunidades reales de negocio y diseñar estrategias enfocadas en segmentos específicos. Este capítulo presenta los elementos necesarios para integrar ambos procesos en la construcción del diagnóstico del mercado objetivo y la elaboración del informe estratégico correspondiente.

    Separador

    #t_6_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 6.1 Entorno y segmentación
    .mb-0 

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario-v.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/img_3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El diagnóstico del entorno proporciona información clave sobre variables económicas, sociales, tecnológicas y competitivas que influyen en el comportamiento del mercado, mientras que la segmentación utiliza dicha información para identificar grupos de consumidores con características similares (Kotler & Keller, 2016). Esta relación permite que la selección del mercado objetivo se base en análisis estratégicos y no únicamente en percepciones comerciales.

    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-10.mb-0
        .cajon.color-acento-botones.p-4(data-aos="zoom-in-right")
          p.mb-0 Por ejemplo, si el diagnóstico del entorno evidencia un crecimiento significativo del comercio electrónico en un determinado país, la segmentación puede enfocarse en consumidores digitales con alta frecuencia de compra en línea, permitiendo diseñar estrategias específicas para este segmento. De esta manera, el diagnóstico se convierte en el insumo fundamental para orientar el proceso de segmentación de mercados.

    Separador

    #t_6_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 6.2 Diagnóstico
    .mb-0 

    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema6/img_4.png', class="img-fluid")
      .col-12.col-lg-9.mb-0
        p.mb-3(data-aos="zoom-in-right") La construcción del diagnóstico del mercado objetivo consiste en integrar la información obtenida del análisis del entorno con los resultados del proceso de segmentación, con el fin de identificar los segmentos más atractivos para la organización. Este proceso implica evaluar variables como tamaño del segmento, capacidad de compra, tendencias de consumo, nivel de competencia y accesibilidad del mercado.
        .tarjeta.color-acento-botones-cv.p-4.rounded-3.mb-0(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-6.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/tema6/img_5.png', class="img-fluid")
            .col-12.col-lg-9(data-aos="zoom-in-right")
              p.mb-0 En el ámbito empresarial, esta etapa permite priorizar oportunidades comerciales y orientar la asignación de recursos hacia los segmentos con mayor potencial de rentabilidad. Por ejemplo, una empresa de productos saludables puede identificar, mediante su diagnóstico, que el segmento de consumidores jóvenes urbanos con hábitos de vida saludable presenta mayor crecimiento y disposición de compra, orientando sus estrategias hacia dicho mercado objetivo.

    .subtitulo-destacado.mb-5(data-aos="zoom-in-right")
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto.ps-4.p-2 Elementos del diagnóstico del mercado objetivo

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-12.col-lg-9.order-2.order-lg-1
        .custom-slider.p-3.p-sm-3.mb-5(data-aos="zoom-in-right")
          SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-6").p-2.rounded-3
            .tarjeta--fondo-img-2.h-100
              .tarjeta--01.mb-3
              h5.text-center.mb-0 Análisis del entorno
              .tarjeta--slider__content.text-center.mb-2 Identifica condiciones económicas, sociales y competitivas.
            .tarjeta--fondo-img-2.h-100
              .tarjeta--02.mb-3
              h5.text-center.mb-0 Perfil del consumidor
              .tarjeta--slider__content.text-center.mb-2 Describe características demográficas, psicográficas y conductuales.
            .tarjeta--fondo-img-2.h-100
              .tarjeta--03.mb-3
              h5.text-center.mb-0 Evaluación del segmento
              .tarjeta--slider__content.text-center.mb-2 Analiza tamaño, rentabilidad y accesibilidad.
            .tarjeta--fondo-img-2.h-100
              .tarjeta--04.mb-3
              h5.text-center.mb-0 Priorización estratégica
              .tarjeta--slider__content.text-center.mb-2  Selecciona segmentos con mayor potencial.
      .col-8.col-md-6.col-lg-3.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema6/img_11.png', class="img-fluid") 



    Separador

    #t_6_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 6.3 Informes
    .mb-0 

    .row.justify-content-center.align-items-center.mb-5
      .col-4.col-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema6/img_12.png', class="img-fluid")
      .col-12.col-lg-10.mb-0
        p.mb-3(data-aos="zoom-in-right") El informe de diagnóstico y segmentación es el documento estratégico que presenta de manera organizada los resultados del análisis del entorno, la segmentación del mercado y la selección del mercado objetivo, sirviendo como base para la formulación de estrategias comerciales (Armstrong & Kotler, 2017). Este informe debe incluir la descripción del contexto del mercado, la metodología utilizada, los resultados del análisis y las recomendaciones estratégicas derivadas del estudio.
        p.mb-3(data-aos="zoom-in-right") La elaboración adecuada del informe facilita la toma de decisiones organizacionales y permite que las diferentes áreas de la empresa comprendan las oportunidades identificadas en el mercado. 
        .tarjeta--bg-img.color-acento-botones-cv.rounded-3.overflow-hidden(data-aos="fade-right")
          .row.align-items-center.mb-0
            .col-8.col-md-4.col-lg-2.mx-auto.text-center.p-5.p-md-5.p-lg-4
              figure.m-0
                img(src="@/assets/curso/tema6/img_13.svg")
            .col-12.col-md-8.col-lg-10.p-4
              .row.justify-content-between.align-items-center.g-3
                .col-12.col-sm
                  p.mb-0 <B>Ejemplo aplicado.</B> Una compañía del sector tecnológico presentó un informe por medio del cual evidenció el crecimiento del segmento de usuarios de dispositivos móviles en cierta región, recomendando el fortalecimiento de canales digitales y campañas promocionales dirigidas a este público específico, a continuación, lo invitamos a que consulte la lectura complementaria del informe.
                .col-12.col-sm-auto.pe-4
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Ejemplo_aplicado.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download.ms-2

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10(data-aos="zoom-in-right")
        .cita-decorada.mb-5
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-1.p-5
            .row.justify-content-center.align-items-center.mb-lg-0.mb-5
              .col-10.col-lg-7.mb-lg-0.mb-5
                .bloque-texto-b.cita-decorada__texto.mb-1.p-0
                  .bloque-texto-b__texto
                    i.fas.fa-quote-left
                    h5.mb-0 El conocimiento del mercado adquiere verdadero valor cuando se utiliza con responsabilidad para ofrecer soluciones que generen bienestar a la sociedad.
                    i.fas.fa-quote-right
              .col-7.col-lg-5.position-relative.mb-0
                figure
                  img(src='@/assets/curso/tema6/img_14.png', class="cita-decorada__imagen-flotante-4")
              


</template>

<script>
export default {
  name: 'Tema6',
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
