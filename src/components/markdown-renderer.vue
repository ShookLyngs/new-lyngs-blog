<template>
  <markdown class="markdown-article" />
</template>

<script>
  // Components
  import Markdown from 'vue3-markdown-it';

  export default {
    name: 'markdown-renderer',
    components: {
      Markdown,
    },
  };
</script>

<style lang="less">
  .markdown-article {
    p {
      @apply text-lg xl:text-2xl;

      + p {
        @apply mt-3;
      }
    }
  }
</style>