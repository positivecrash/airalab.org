<template>
  <LayoutRU>
    <section class="w-base page-inside report">
      <h1>Отчеты</h1>

      <ul class="grid grid-c3 report__list">
        <ReportItem 
          v-for="report in reports"
          :key="report.id"
          :title="report.title"
          :link="report.link"
        />
      </ul>

    </section>
  </LayoutRU>
</template>

<script>
export default {

  components: {
    ReportItem: () => import('~/components/ReportItem.vue')
  },

  data() {
    return {
      reports: [
        {
          id: 0,
          title: 'Отчет Минюст63 2022',
          link: '/reports/airalab-rus-otchet-minust-2022.xlsx'
        },
        {
          id: 1,
          title: 'Отчет Минюст63 2021',
          link: '/reports/airalab-rus-otchet-minust-2021.xlsx'
        },
        {
          id: 2,
          title: 'Отчет Минюст63 2020',
          link: '/reports/airalab-rus-otchet-minust-2020.xlsx'
        },
        {
          id: 4,
          title: 'Отчет Минюст63 2019',
          link: '/reports/airalab-rus-otchet-minust-2019.xlsx'
        },
        {
          id: 5,
          title: 'Отчет Минюст63 2018',
          link: '/reports/airalab-rus-otchet-minust-2018.xlsx'
        }
      ] 
    }
  }

}
</script>

<style scoped>

  .report__list {
    list-style: none;
    gap: var(--space);
  }

</style>