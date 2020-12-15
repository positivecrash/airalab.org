<template>
  <LayoutRU>
    <MetaInfo
      :metaSiteName = "this.$static.metadata.siteNameRU"
      :metaTitle = "'Спасибо, что поддерживаете нас!'"
      :metaDescription = "this.$static.metadata.siteDescriptionRU"
    />

    <PageContent
      :title="'Спасибо, что поддерживаете нас!'"
      :text = "'<p>Ваша поддержка для нас не только материальное обеспечение на будущее, но ещё и большой мотиватор развивать проекты с большей энергией и энтузиазмом.</p><p>О ходе нашей работы мы публикуем <a target=_blank href=' + this.$static.metadata.blogRU + '>новости в блоге</a>. Так же вы можете <a target=_blank href=' + this.$static.metadata.subscribeRU + '>подписаться на рассылку</a>.</p>'"
    />
  </LayoutRU>
</template>

<static-query>
  query {
    metadata {
      siteNameRU,
      siteDescriptionRU,
      blogRU,
      subscribeRU
    }
  }
</static-query>

<script>
export default {
  components: {
    PageContent: () => import('~/components/PageDonationDone.vue'),
    MetaInfo: () => import('~/components/MetaInfo.vue')
  }
}
</script>
