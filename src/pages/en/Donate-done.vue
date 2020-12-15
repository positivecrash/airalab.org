<template>
  <LayoutEN>
    <MetaInfo
      :metaSiteName = "this.$static.metadata.siteNameEN"
      :metaTitle = "'Thank you for your support'"
      :metaDescription = "this.$static.metadata.siteDescriptionEN"
    />

    <PageContent
      :title="'Thank you for your support!'"
      :text = "'<p>Your support for us is not only material support for the future, but also a great motivator to develop projects with more energy and enthusiasm.</p><p>On the progress of our work, we publish <a target=_blank href=' + this.$static.metadata.blogEN + '>news in the blog</a>. You can also <a target=_blank href=' + this.$static.metadata.subscribeEN + '>subscribe to the newsletter</a>.</p>'"
    />
  </LayoutEN>
</template>

<static-query>
  query {
    metadata {
      siteNameEN,
      siteDescriptionEN,
      blogEN,
      subscribeEN
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
