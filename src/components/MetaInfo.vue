<template></template>

<script>
export default {
  props: {
      metaSiteName: { type: String, default: '' },
      metaTitle: { type: String, default: '' },
      metaDescription: { type: String, default: '' }
  },

  data() {
        
        return {
            title: this.metaTitle + ' / ' + this.metaSiteName,
            url: ''
        };
        
    },

  mounted() {
    this.url = window.location.href;
  },
 

  metaInfo() {
    return {
      title: this.title,
      meta: [
        { key: 'description', name: 'description', content: this.pageDescription },

        // Some Open Graph Tags
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: this.metaSiteName },
        { property: "og:title", content: this.title },
        { property: "og:description", content: this.metaDescription },
        // { property: "og:image", content: '/website_cover.png' },
        // { property: "og:image:width", content: '1280' },
        // { property: "og:image:height", content: '800' },
        { property: "og:url", content: this.url },


        // Some Twitter Cards Tags
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: this.title },
        // { name: "twitter:image", content: '/website_cover.png' },
        { name: "twitter:description", content: this.metaDescription },
      ]

    };
  }
};
</script>