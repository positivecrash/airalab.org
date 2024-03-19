<template>
  <div class="aira-flot-advantages__item">
    <div class="aira-flot-advantages__item-header" @click="toggleItems(title)">
      <g-image :src="require(`!!assets-loader!@/assets/images/aira-flot/advantage-icon-${id + 1}.svg`)" alt="" aria-hidden="true"/>
      <h3 class="aira-flot-advantages__item-title">{{ title }}</h3>
      <button>
        <span class="aira-flot-advantages__item-toggler" 
        :class="{'aira-flot-advantages__item-toggler--active': isOpen && current === title}"/>
      </button>
    </div>
    <div class="aira-flot-advantages__item-content" 
    :class="{'aira-flot-advantages__item-content--active': isOpen && current === title}"
    > 
      <ul class="aira-flot-advantages__item-list">
        <li 
          class="aira-flot-advantages__item-el"
          v-for="item in items"
          :key="item.id"
        >
          {{item.text}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

  props: {
    title: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: []
    },
    id: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      isOpen: false,
      current: ''
    }
  },

  methods: {
    toggleItems(title) {
      if(!this.isOpen) {
        this.current = title
        this.isOpen = true
      } else {
        this.current = ''
        this.isOpen = false
      }

    }
  }
   

}
</script>

<style scoped>

  .aira-flot-advantages__item {
    padding: calc(var(--space) * 0.5) calc(var(--space) * 2);
    background-color: var(--color-light);
    border-radius: 28px;
  }

  .aira-flot-advantages__item-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }

  .aira-flot-advantages__item-header img {
    width: 74px;
    height: 74px;
    border-radius: 100%;
    background-color: lavender;
  }

  .aira-flot-advantages__item-header button {
    padding: var(--space);
    border: 1px solid transparent;
    background: transparent;
  }

  .aira-flot-advantages__item-toggler {
    position: relative;
    display: inline-block;
    width: 2px;
    height: 36px;
    background-color: var(--aira-flot-dark);   
    transform: rotate(90deg);
  }

  .aira-flot-advantages__item-toggler::after {
    content: '';
    position: absolute;
    top: 0px;
    width: 2px;
    height: 36px;
    background-color: var(--aira-flot-dark);
    transform: rotate(-90deg);
    transition: opacity 0.33s ease-in-out, transform 0.3s ease-in;
  }

  .aira-flot-advantages__item-toggler--active::after {
    opacity: 0;
    transform: translateX(20px);
  }

  .aira-flot-advantages__item-content {
    height: 0;
    visibility: hidden;
    opacity: 0;
    transition: height 0.33s ease-in-out,  opacity 0.33s ease-in-out, visibility 0.33s ease-in-out;
  }

  .aira-flot-advantages__item-content--active {
    height: 500px;
    visibility: visible;
    opacity: 1;
  }

  .aira-flot-advantages__item-list {
    margin: 0;
    padding-left: calc(var(--space) * 2);
    padding-right: calc(var(--space) * 2);
    font-weight: 500;
  }

  .aira-flot-advantages__item-el:not(:last-child) {
    margin-bottom: calc(var(--space) * 0.5);
  }

  @media screen and (max-width: 1200px) {
    .aira-flot-advantages__item:first-of-type {
      margin-bottom: var(--space);
    }

    .aira-flot-advantages__item-list {
      padding-left: var(--space);
      padding-right: var(--space);
    }
  }

  @media screen and (max-width: 640px) {
    .aira-flot-advantages__item-header {
      flex-direction: column;
    }

    .aira-flot-advantages__item-title {
      margin-bottom: 0;
    }
  }

  @media screen and (max-width: 480px) {
    .aira-flot-advantages__item {
      padding: calc(var(--space)* 0.5) calc(var(--space)* 0.8);
    }
    .aira-flot-advantages__item-el {
      font-size: calc(var(--text-size-base) * 0.9);
    }
  }

</style>