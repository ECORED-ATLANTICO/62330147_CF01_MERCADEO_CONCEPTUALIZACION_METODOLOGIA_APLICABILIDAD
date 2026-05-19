<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-center.mb-0
      .col-4.col-lg-2.d-none.d-lg-block.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/sintesis/img_1.png', class="img-fluid")
      .col-12.col-lg-10.mb-0
        p.mb-3(data-aos="zoom-in-right") El componente formativo muestra los fundamentos conceptuales y metodológicos necesarios para analizar el entorno empresarial, comprender la estructura del mercado e identificar oportunidades comerciales mediante herramientas de diagnóstico estratégico. El desarrollo de estos conocimientos fortalece la capacidad de interpretar la dinámica competitiva y tomar decisiones fundamentadas en información estratégica.

    p Por medio de este componente se ofrece al aprendiz la posibilidad de integrar el diagnóstico del entorno con la segmentación de mercados, facilitando la identificación del mercado objetivo y la preparación de informes estratégicos orientados a la formulación de estrategias comerciales coherentes con las condiciones del mercado.
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis/sintesis.svg", alt="La ilustración muestra la estructura jerárquica que sintetiza el contenido del componente formativo “diagnóstico y segmentación”, el cual se organiza en seis unidades. Inicia con los fundamentos del mercado en donde se aborda su concepto, estructura y tipos, mercado, empresa y consumidor y finaliza con análisis de información. En el capítulo dos se desarrolla el entorno organizacional, donde se aborda el macroentorno, microentorno, decisiones comerciales y culmina con fuentes de información, el capítulo tres, aborda la temática de diagnóstico, en la que se desarrolla el direccionamiento estratégico, su concepto y propósito, las técnicas de análisis y el análisis DOFA, el capítulo cuatro trabaja la segmentación, abordando el concepto y objetivos, variables, técnicas y selección del mercado. El capítulo cinco desarrolla la comercialización y distribución, abordando las temáticas de estructura y canales de distribución. Cierra el componente con el capítulo seis en donde se aborda la integración, desarrollando los temas de entorno y segmentación, diagnóstico y culmina con informes.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Síntesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
