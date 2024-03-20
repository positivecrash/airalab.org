<template>

    <div class="aira-flot">
      <MetaInfo
        :metaSiteName = "this.$static.metadata.siteNameRU"
        metaTitle = "Водный дрон-эколог"
        metaDescription = "Водный дрон-эколог от компании «Аира Флот» — беспилотное надводное судно, используемое для мониторинга водоемов как в ручном,так и в полностью автоматизированном режиме"
      />

      <Banner/>

      
      <!-- monitoring section -->
      <section class="aira-flot-section aira-flot-monitoring">
        <div class="aira-flot-layout">
          <h2 class="aira-flot__title">
            <span class="aira-flot__title-accent">Как</span> осуществляется мониторинг
          </h2>
          <ul class="aira-flot-monitoring__list aira-flot-grid-2">
            <MonitoringItem 
              v-for="item in monitoringItems"
              :key="item.id"
              :text="item.text"
              :index="item.id + 1"
            />
          </ul>
          <div class="aira-flot-grid-3">
            <div class="aira-flot-image">
              <g-image src="@/assets/images/aira-flot/boat-3.png" alt="aira flot photo" />
            </div>
            <div class="aira-flot-image">
              <g-image src="@/assets/images/aira-flot/boat-2.png" alt="aira flot photo" />
            </div>
            <div class="aira-flot-image">
              <g-image src="@/assets/images/aira-flot/boat-1.png" alt="aira flot photo" />
            </div>
          </div>
        </div>
      </section>

      <!-- advantages section -->
      <section class="aira-flot-section aira-flot-advantages">
        <div class="aira-flot-layout">
          <h2 class="aira-flot__title center desktop">
            <span class="aira-flot__title-accent">Преимущества водного дрона</span> перед существующими способами мониторинга водных объектов
          </h2>
          <h2 class="aira-flot__title center mobile">
            <span class="aira-flot__title-accent">Преимущества</span> водного дрона перед существующими способами мониторинга водных объектов
          </h2>
          <div class="aira-flot-advantages__wrapper">
            <AdvantagesItem
              v-for="advantage in advantages"
              :key="advantage.id"
              :id="advantage.id"
              :title="advantage.title"
              :items="advantage.items"
            />
          </div>
        </div>
      </section>

      <!-- trust section -->
      <section class="aira-flot-section aira-flot-trust">
        <div class="aira-flot-layout">
          <h2 class="aira-flot__title">
            <span class="aira-flot__title-accent">Нам доверяют</span>
          </h2>
          <div class="aira-flot-trust__wrapper">
            <div class="aira-flot-trust__item">
              <g-image src="@/assets/images/aira-flot/tolyatti.png" class="aira-flot-trust__logo aira-flot-trust__logo--tl" alt="Администрация города Тольятти"/>
              <span class="aira-flot-trust__text">Администрация города Тольятти</span>
            </div>
            <div class="aira-flot-trust__item">
              <g-image src="@/assets/images/aira-flot/volgograd.png" class="aira-flot-trust__logo" alt="Облкомприроды Волгоградской области"/>
              <span class="aira-flot-trust__text">Облкомприроды Волгоградской области</span>
            </div>
            <div class="aira-flot-trust__item">
              <g-image src="@/assets/images/aira-flot/nornikel.png" class="aira-flot-trust__logo aira-flot-trust__logo--nornikel" alt="норникель"/>
            </div>
          </div>
        </div>
      </section>

      <!-- video section -->
      <section class="aira-flot-section aira-flot-video">
        <div class="aira-flot-layout">
          <Video/>
        </div>
      </section>

      <!-- trials section -->
      <section class="aira-flot-section aira-flot-trials">
        <div class="aira-flot-layout">
          <h2 class="aira-flot__title center desktop">
            <span class="aira-flot__title-accent"> Испытания водного&nbsp;  дрона-эколога</span> 
          </h2>
          <h2 class="aira-flot__title center mobile">
            <span class="aira-flot__title-accent"> Испытания </span> водного&nbsp; дрона-эколога были проведены в следующих местах
          </h2>
          <div class="aira-flot-trials__wrapper aira-flot-pill__wrapper">
            <span v-for="trial in trials" :key="trial.id" class="aira-flot-pill config__item">{{ trial.text }}</span>
          </div>
          <div class="aira-flot-grid-3">
            <div class="aira-flot-image">
              <g-image src="@/assets/images/aira-flot/boat-4.png" alt="aira flot photo" />
            </div>
            <div class="aira-flot-image">
              <g-image src="@/assets/images/aira-flot/boat-5.png" alt="aira flot photo" />
            </div>
            <div class="aira-flot-image">
              <g-image src="@/assets/images/aira-flot/boat-6.png" alt="aira flot photo" />
            </div>
          </div>
        </div>
      </section>

      <!-- footer -->
      <Footer/>

    </div>


</template>

<static-query>
  query {
    metadata {
      siteNameRU
    }
  }
</static-query>

<script>
export default {
  components: {
    MetaInfo: () => import('~/components/MetaInfo.vue'),
    Banner: () => import('~/components/aira-flot/Banner.vue'),
    MonitoringItem: () => import('~/components/aira-flot/MonitoringItem.vue'),
    AdvantagesItem: () => import('~/components/aira-flot/AdvantagesItem.vue'),
    Video: () => import('~/components/aira-flot/Video.vue'),
    Footer: () => import('~/components/aira-flot/Footer.vue'),
  },

  data() {
    return {
      monitoringItems: [
        {
          id: 0,
          text: "Данные о качестве воды, собранные в ходе исследований, сохраняются с применением технологии <b>блокчейн</b>, что обеспечивает максимальную их защиту."
        },
        {
          id: 2,
          text: "Эхолот <b>применяется для контроля дноуглубительных работ</b>. С помощью видеокамеры оценивается состояние мостовых опор и иных конструкций."
        },
        {
          id: 1,
          text: "Устройство обеспечивает автоматические <b>сертифицированные измерения, высокую скорость передачи данных</b> всем участникам процесса, осуществляя и забор проб воды."
        },
        {
          id: 3,
          text: "Дрон-эколог <b>создан для эксплуатации экологическими службами</b> и предприятиями, которым необходим контроль качества воды в водоемах, мониторинг состояния сооружений."
        }
      ],

      advantages: [
        {
          id: 0,
          title: 'Безопасный труд лаборанта',
          items: [
            {
              id: 0,
              text: 'Не требует применения плавсредств'
            },
            {
              id: 1,
              text: 'Запускается и управляется с берега'
            },
            {
              id: 2,
              text: 'Возможно построение маршрута с применением беспилотных технологий'
            },
            {
              id: 3,
              text: 'Не требует экипировки'
            },
            {
              id: 4,
              text: 'Помещается в багажник автомобиля'
            },    
            {
              id: 5,
              text: 'Легко транспортируется одним специалистом (масса до 20 кг)'
            }
          ]
        },
        {
          id: 1,
          title: 'Технические преимущества',
          items: [
            {
              id: 0,
              text: 'Удобный и понятный интерфейс'
            },
            {
              id: 1,
              text: 'Мгновенная передача данных в любую точку, всем участникам процесса'
            },
            {
              id: 2,
              text: 'Отечественная разработка, технологический суверенитет'
            },
            {
              id: 3,
              text: 'Адаптируемая под задачи платформа'
            },
            {
              id: 4,
              text: 'Простота применения и обслуживания'
            }
          ]
        }
      ],
      trials: [
        {
          id: 0,
          text: 'Малые водоёмы Поволжья'
        },
        {
          id: 1,
          text: 'Река Волга в Самарской области'
        },
        {
          id: 2,
          text: 'Мурманск'
        },
        {
          id: 3,
          text: 'Река Ахтуба в Волгоградской области'
        },
        {
          id: 4,
          text: 'Норильск'
        },
      ]
    }
  }
}
</script>

<style scoped>

  .aira-flot {
    min-width: 334px;
    /* padding-bottom: calc(var(--space) * 2); */
    background-color: #F1F1F1;
  }

  .aira-flot-monitoring {
    margin-top: calc(var(--space) * 3);
  }

  .aira-flot-monitoring__list {
    margin-left: 0;
    margin-bottom: calc(var(--space) * 3);
  }

  .aira-flot-advantages__wrapper {
    display: flex;
    gap: var(--space);
    align-items: flex-start;
  }

  .aira-flot-trust__wrapper {
    display: grid;
    grid-template-columns: minmax(150px, 490px) minmax(150px, 590px) minmax(150px, 300px);
    justify-content: center;
    gap: var(--space);
  }

  .aira-flot-trust__item {
    padding: calc(var(--space) * 0.9) calc(var(--space) * 1.5);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-light);
    border-radius: 120px;
  }

  .aira-flot-trust__logo {
    max-width: 58px;
    width: 100%;
  }

  .aira-flot-trust__logo--tl {
    max-width: 40px;
  }

  .aira-flot-trust__logo--nornikel {
    max-width: 210px;
  }

  .aira-flot-trust__text {
    display: inline-block;
    margin-left: calc(var(--space) * 1.3);
    font-weight: 700;
    max-width: 300px;
  }

  .aira-flot-trials__wrapper {
    max-width: 1000px;
    margin: 0 auto;
    margin-bottom: calc(var(--space) * 3);
  }

  .aira-flot-trials__wrapper span {
    font-size: calc(var(--text-size-base) * 0.7);
  }


  @media screen and (max-width: 1200px) {
    
    .aira-flot-advantages__wrapper {
      display: block;
    }

    .aira-flot-trust__wrapper {
      grid-template-columns: 1fr;
    }
  }

  @media screen and (max-width: 520px) {
    .aira-flot-trust__text {
      font-size: calc(var(--text-size-base) * 0.7);
    }
  }

</style>