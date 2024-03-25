<template>
  <div class="qa__wrapper">
    <div class="qa__item"
      v-for="item in items"
      :key="item.id"
      :class="{'qa__item--active': item.isExpand}"
    >
      <div class="qa__header" @click.prevent="toggleExpand(item)">
        <span>{{ item.title }}</span>
        <div class="qa__icon" :class="{'qa__icon--active': item.isExpand}" />
      </div>
      
      <div class="qa__body"
        :ref="'content' + item.id"
        :style="[item.isExpand ? {height: item.computedHeight} : {}]"
      >
        <div v-html="item.content" class="qa__content"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      items: [
        {
          id: 0,
          title: "Что входит в демо испытания?",
          content: "<p>В ходе проведения демонстрационных испытаний, которые проводятся в рамках двух дней, не более 30 минут в день,мы предоставляем данные по следующим показателям:</p><ul><li><b>Кислотно-щелочной баланс (pH);</b></li><li><b>Температура;</b></li><li><b>Окислительно-восстановительный потенциал (ОВП);</b></li><li><b>Растворенный кислород.</b></li></ul><p>В расширенной версии к указанному выше предоставляется видеозапись, рельеф дна, образцы проб воды.</p>",
          isExpand: false,
          computedHeight: 0,
        },
        {
          id: 1,
          title: "Как долго дрон может плавать на одном заряде?",
          content: "<p>Продолжительность заплыва дрона <b>зависит от объема</b> аккумуляторов, которыми укомплектовано судно, от скорости течения и температуры воздуха и воды.  В версии, которая прошла испытания, <b>заряда хватает для проведения исследований в течении 8 часов.</b></p>",
          isExpand: false,
          computedHeight: 0,
        },
        {
          id: 2,
          title: "Если пропала связь с дроном, что делать?",
          content: "<p><b>Дрон оснащен GPS маяком и подсветкой</b>, которые позволяют следить за его нахождением, даже если он не реагирует на сигналы с пульта.</p>",
          isExpand: false,
          computedHeight: 0,
        },
        {
          id: 3,
          title: "Где хранятся данные, полученные в ходе мониторинга?",
          content: "<p>Данные, полученные в ходе исследований, это синхронизированный <b>массив цифровой информации, сохраненной с использованием технологии распределенных реестров</b>, что обеспечивает ее максимальную защиту.</p>",
          isExpand: false,
          computedHeight: 0,
        },
      ]
    }
  },

  methods: {
    toggleExpand(item) {
      item.isExpand = !item.isExpand;
    },
    getComputedHeight() {
      this.items.forEach(item => {
        const content = this.$refs["content" + item.id][0];
        
        content.style.height = 'auto';
        content.style.position = 'absolute';
        content.style.visibility = 'hidden';
        content.style.display = 'block';

        const height = getComputedStyle(content).height;
        item.computedHeight = height;

        content.style.height = 0;
        content.style.position = null;
        content.style.visibility = null;
        content.style.display = null;
      });
    }
  },

  mounted() {
    this.getComputedHeight();
  }
}
</script>

<style scoped>

.qa__item {
  height: auto;
  display: block;
  position: relative;
  margin: 8px 0;
  padding: calc(var(--space) * 0.4) var(--space);
  border-radius: 28px;
  background-color: var(--aira-flot-blue);
  transition: all 0.3s;
}

.qa__item--active {
  padding: calc(var(--space)* 1.5) var(--space);
}

.qa__header,
.qa__content {
  margin: 10px 0;
}

.qa__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

.qa__header span {
  font-weight: 600;
}

.qa__body {
  height: 0;
  overflow: hidden;
  transition: 0.3s;
  overflow-y: auto;
}

.qa__icon {
  position: absolute;
  right: 58px;
  display: inline-block;
  width: 2px;
  height: 30px;
  background-color: var(--color-light);   
  transform: rotate(90deg);
}

.qa__icon::after {
  content: '';
  position: absolute;
  top: 0px;
  width: 2px;
  height: 30px;
  background-color: var(--color-light);   
  transform: rotate(-90deg);
  transition: opacity 0.33s ease-in-out, transform 0.3s ease-in;
}

.qa__icon--active::after {
  opacity: 0;
  transform: translateX(20px);
}


@media screen and (max-width: 1200px) {
  .qa__header span {
    max-width: 450px;
  }
}

@media screen and (max-width: 570px) {

  .qa__item {
    padding: calc(var(--space) * 0.5) calc(var(--space) * 1.2);
  }
  .qa__header span {
    max-width: 260px;
  }

  .qa__icon {
    right: 36px;
    width: 2px;
    height: 20px;
  }

  .qa__icon::after {
    width: 2px;
    height: 20px;
  }
  


}


</style>