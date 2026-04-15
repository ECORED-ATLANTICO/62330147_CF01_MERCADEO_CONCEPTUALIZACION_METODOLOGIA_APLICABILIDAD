<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/introduccion/img_1.png', class="img-fluid")
      .col-12.col-lg-9.mb-0
        p.mb-3(data-aos="zoom-in-right") Las organizaciones que comprenden el comportamiento del mercado poseen mayores probabilidades de diseñar estrategias competitivas sostenibles. Este componente formativo introduce al aprendiz en el análisis del entorno empresarial, el diagnóstico estratégico y la segmentación de mercados, herramientas fundamentales para identificar oportunidades comerciales y orientar decisiones de mercadeo basadas en información real y verificable. A través de conceptos esenciales y aplicaciones prácticas, el aprendiz comenzará a desarrollar una visión estratégica del mercado.
        .tarjeta.color-acento-botones-cv.p-4.rounded-3.mb-0(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-11.order-2.order-lg-1(data-aos="zoom-in-right")
              p.mb-0 Comprender el mercado no solo permite vender más, sino también tomar decisiones responsables que respondan a necesidades reales de los consumidores y a las condiciones del entorno empresarial. Este componente permitirá reconocer cómo el análisis del entorno influye en la identificación de segmentos de mercado y cómo la selección adecuada del mercado objetivo fortalece la competitividad organizacional, contribuyendo al desarrollo empresarial sostenible.
            .col-3.col-lg-1.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/introduccion/img_2.svg', class="img-fluid")
</template>

<script>
export default {
  name: 'Introduccion',
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
