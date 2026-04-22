<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos del mercado
 
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario-v.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Comprender el mercado es el punto de partida de cualquier decisión estratégica en <em>marketing</em> y gestión empresarial, las organizaciones operan en entornos dinámicos donde la oferta, la demanda, los competidores y los consumidores interactúan permanentemente, generando oportunidades y riesgos que deben ser analizados de manera sistemática. Según Kotler y Keller (2016), el mercado no debe entenderse únicamente como un lugar físico de intercambio, sino como un conjunto de relaciones económicas, sociales y tecnológicas que determinan el comportamiento de compra.

    .row.justify-content-center.align-items-center.mb-3
      .col-3.col-lg-1.mb-3.mb-lg-0.d-none.d-lg-block(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema1/img_2.svg', class="img-fluid")
      .col-12.col-lg-9.mb-0
        p.mb-0(data-aos="zoom-in-right") En este capítulo se abordarán los fundamentos conceptuales que permiten identificar la estructura del mercado, sus principales tipos y la forma en que las empresas analizan la información disponible para comprender su funcionamiento. El conocimiento de estos elementos proporciona la base necesaria para realizar posteriormente diagnósticos estratégicos y procesos de segmentación que orienten la toma de decisiones comerciales.

    Separador

    #t_1_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.1 Concepto
    .mb-0 

    .row.justify-content-center.align-items-center.mb-5
      .col-4.col-md-6.col-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema1/img_3.png', class="img-fluid")
      .col-12.col-lg-9.mb-3.mb-lg-0(data-aos="zoom-in-right")
        p.mb-3 El mercado se define como el conjunto de compradores reales y potenciales que poseen necesidades similares y capacidad de intercambio para satisfacerlas mediante bienes o servicios. Desde la perspectiva del <em>marketing</em> moderno, el mercado se configura a partir de la interacción entre consumidores, empresas oferentes, intermediarios, instituciones regulatorias y factores tecnológicos que facilitan el intercambio, esta interacción determina el comportamiento de precios, niveles de competencia y oportunidades de crecimiento.
        p.mb-0 La composición del mercado incluye tres elementos fundamentales: 
      .col-3.col-lg-1.mb-3.mb-lg-0.d-none.d-lg-block(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema1/img_4.svg', class="img-fluid")
      
    .row.justify-content-center.align-items-stretch.mb-5
      .col-12.col-md-5.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-right")
        .tarjeta.color-acento-contenido-cv.p-4.rounded-4.mb-0.h-100.d-flex.align-items-center.justify-content-center
          .row.justify-content-center.align-items-center.mb-0
            .col-4.col-lg-4.mb-0
              figure
                img(src='@/assets/curso/tema1/img_5.svg', class="img-fluid")
            .col-12.col-lg-8.mb-0
              h5.mb-3 Demanda
              p.mb-0 Representada por los consumidores.
      .col-12.col-md-7.col-lg-4.mb-3.mb-lg-0(data-aos="zoom-in-right")
        .tarjeta.color-acento-contenido-cv.p-4.rounded-4.mb-0.h-100.d-flex.align-items-center.justify-content-center
          .row.justify-content-center.align-items-center.mb-0
            .col-3.col-lg-3.mb-0
              figure
                img(src='@/assets/curso/tema1/img_6.svg', class="img-fluid")
            .col-12.col-lg-9.mb-0
              h5.mb-3 Oferta
              p.mb-0 Conformada por las empresas que participan en el sector.
      .col-12.col-md-9.col-lg-5.mb-3.mb-lg-0(data-aos="zoom-in-right")
        .tarjeta.color-acento-contenido-cv.p-4.rounded-4.mb-0.h-100.d-flex.align-items-center.justify-content-center
          .row.justify-content-center.align-items-center.mb-0
            .col-3.col-lg-3.mb-0
              figure
                img(src='@/assets/curso/tema1/img_7.svg', class="img-fluid")
            .col-12.col-lg-9.mb-0
              h5.mb-3 Entorno
              p.mb-0 Integrado por variables económicas, sociales y tecnológicas que influyen en el intercambio comercial.

    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-10.mb-0
        .cajon.color-acento-botones.p-4(data-aos="zoom-in-right")
          p.mb-0 Por ejemplo, el mercado de comercio electrónico en Colombia ha crecido significativamente debido al aumento del acceso a internet y al uso de plataformas digitales, lo que ha impulsado la participación de empresas tradicionales en canales virtuales.

    Separador

    #t_1_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.2 Estructura y tipos
    .mb-0 
    
    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/tema1/img_8.png')
      .bloque-texto-t__texto.col-10.mb-0
        p.mb-0 La estructura del mercado se refiere a la forma en que se organizan las empresas dentro de un sector y al nivel de competencia existente. De acuerdo con Mankiw (2021), los mercados pueden clasificarse en competencia perfecta, competencia monopolística, oligopolio y monopolio, dependiendo del número de participantes y del grado de control sobre los precios. Cada tipo de mercado presenta características específicas que determinan las estrategias comerciales de las organizaciones.

    .row.justify-content-center.align-items-center.mb-3
      .col-4.col-lg-2.d-none.d-lg-blockmb-4(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema1/img_9.png', class="img-fluid")
      .col-12.col-lg-8.mb-4
        p.mb-3(data-aos="zoom-in-right") Por ejemplo, el mercado de telefonía móvil en muchos países presenta características de oligopolio, debido a la existencia de pocos operadores que concentran la mayor parte de la participación, esta situación obliga a las empresas a diferenciar sus servicios mediante planes, promociones y valor agregado, en lugar de competir únicamente por precio. Comprender la estructura del mercado permite a las organizaciones diseñar estrategias comerciales acordes con el nivel de competencia existente.
        p.mb-0(data-aos="zoom-in-right") Tipos de mercado y características principales

    .row.justify-content-center.align-items-stretch.mb-5
      .col-12.col-md-6.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-right")
        .tarjeta.tarjeta--fondo-img-1.p-4.rounded-4.mb-0.h-100.d-flex.align-items-center.justify-content-center
          .row.justify-content-center.align-items-center.mb-3
            .col-6.col-lg-6.mb-5
              figure
                img(src='@/assets/curso/tema1/img_11.svg', class="img-fluid")
            .col-12.col-lg-12.text-center.mb-0
              h5.mb-3 Competencia perfecta
              p.mb-0 Muchos oferentes, productos homogéneos, libre entrada al mercado.
      .col-12.col-md-6.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-right")
        .tarjeta.tarjeta--fondo-img-1.p-4.rounded-4.mb-0.h-100.d-flex.align-items-center.justify-content-center
          .row.justify-content-center.align-items-center.mb-3
            .col-6.col-lg-6.mb-5
              figure
                img(src='@/assets/curso/tema1/img_12.svg', class="img-fluid")
            .col-12.col-lg-12.text-center.mb-0
              h5.mb-3 Competencia monopolística
              p.mb-0 Muchos oferentes, productos diferenciados, competencia basada en marca.
      .col-12.col-md-6.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-right")
        .tarjeta.tarjeta--fondo-img-1.p-4.rounded-4.mb-0.h-100.d-flex.align-items-center.justify-content-center
          .row.justify-content-center.align-items-center.mb-3
            .col-6.col-lg-6.mb-5
              figure
                img(src='@/assets/curso/tema1/img_13.svg', class="img-fluid")
            .col-12.col-lg-12.text-center.mb-0
              h5.mb-3 Oligopolio
              p.mb-0 Pocos oferentes, alta interdependencia competitiva.
      .col-12.col-md-6.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-right")
        .tarjeta.tarjeta--fondo-img-1.p-4.rounded-4.mb-0.h-100.d-flex.align-items-center.justify-content-center
          .row.justify-content-center.align-items-center.mb-3
            .col-6.col-lg-6.mb-5
              figure
                img(src='@/assets/curso/tema1/img_14.svg', class="img-fluid")
            .col-12.col-lg-12.text-center.mb-0
              h5.mb-3 Monopolio
              p.mb-0 Un solo oferente, control del precio.

    Separador

    #t_1_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.3 Mercado, empresa y consumidor
    .mb-0 

    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema1/img_15.png', class="img-fluid")
      .col-12.col-lg-9.mb-0
        p.mb-3(data-aos="zoom-in-right") La empresa actúa como agente transformador que identifica necesidades del consumidor y desarrolla propuestas de valor que permitan satisfacerlas de manera rentable; el consumidor, por su parte, evalúa alternativas disponibles considerando factores económicos, sociales y psicológicos antes de realizar la compra. Esta relación bidireccional implica que las organizaciones deben monitorear continuamente los cambios en preferencias y comportamientos de consumo.
        .tarjeta.color-acento-contenido-cv.p-4.rounded-3.mb-0(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-11(data-aos="zoom-in-right")
              p.mb-0 Un ejemplo empresarial se observa en las cadenas de supermercados que analizan constantemente los hábitos de compra de sus clientes mediante sistemas de información, permitiendo ajustar la oferta de productos, promociones y distribución en los puntos de venta. Este proceso demuestra cómo la interacción entre mercado, empresa y consumidor se convierte en una fuente estratégica de información para la toma de decisiones.
            .col-3.col-lg-1.d-none.d-lg-block.mb-3.mb-lg-0(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/tema1/img_16.svg', class="img-fluid")

    Separador

    #t_1_4.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.4 Análisis de información
    .mb-0 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8.order-2.order-lg-1.mb-0
        p.mb-4(data-aos="zoom-in-right") El análisis de información de mercados consiste en la recopilación, organización e interpretación de datos que permiten comprender tendencias de consumo, comportamiento de competidores y evolución del entorno económico. Según Malhotra (2019), el uso de información confiable reduce la incertidumbre en la toma de decisiones y facilita la identificación de oportunidades comerciales sostenibles.
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-1.d-lg-block.d-none.p-1(data-aos="zoom-in-right")
            figure
              img(src='@/assets/curso/tema1/img_17.svg', class="img-fluid")
          .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
            p.mb-0 Las empresas modernas emplean herramientas tecnológicas como sistemas de inteligencia de negocios, análisis estadístico y plataformas de monitoreo digital para evaluar el comportamiento del mercado. Por ejemplo, empresas de <em>retail</em> utilizan análisis de datos de ventas en tiempo real para ajustar inventarios y promociones, optimizando la eficiencia operativa y la satisfacción del cliente.
      .col-8.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema1/img_18.png', class="img-fluid")
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-9(data-aos="zoom-in-right")
        .cita-decorada.mb-5
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-1.p-5
            .row.justify-content-center.align-items-center.mb-lg-0.mb-5
              .col-7.col-lg-5.position-relative.order-2.order-lg-1.mb-0
                figure
                  img(src='@/assets/curso/tema1/img_19.png', class="cita-decorada__imagen-flotante-1 d-none d-lg-block")
                  img(src='@/assets/curso/tema1/img_20.png', class="cita-decorada__imagen-flotante-1 d-block d-lg-none")
              .col-10.col-lg-7.order-1.order-lg-2.mb-lg-0.mb-5
                .bloque-texto-b.cita-decorada__texto.mb-1.p-0
                  .bloque-texto-b__texto
                    i.fas.fa-quote-left
                    h5.mb-0 La transparencia en el análisis de la información del mercado fortalece la integridad empresarial, porque las decisiones responsables se construyen sobre datos confiables y éticos.
                    i.fas.fa-quote-right

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10(data-aos="zoom-in-right")
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-2.p-5
            .row.justify-content-center.align-items-center.mb-5.mb-lg-0
              .col-12.col-lg-8.mb-5.mb-lg-0
                p.mb-4 Escucha el podcast
                TarjetaAudio.color-acento-botones.mb-0(
                  texto="<h4 class='mb-0'>xxxxx</h4>"
                  :audio="require('@/assets/curso/tema1/img_1.png')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = true"
                  style="border: none !important; padding: 0 !important; background: transparent !important;"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              .col-5.col-lg-4.position-relative
                figure
                  img(src='@/assets/curso/tema1/img_25.png', class="cita-decorada__imagen-flotante-2 d-none d-lg-block")
                  img(src='@/assets/curso/tema1/img_26.png', class="cita-decorada__imagen-flotante-2 d-block d-lg-none")
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
