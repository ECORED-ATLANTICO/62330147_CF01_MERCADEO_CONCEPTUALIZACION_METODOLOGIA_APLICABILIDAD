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
