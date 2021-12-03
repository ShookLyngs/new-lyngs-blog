<template>
  <scrollbar
    disabled-horizontal
    class="flex-auto flex"
    wrap-class="flex-auto flex flex-col"
    view-clas="flex-auto flex flex-col"
  >
    <welcome-header />
    <welcome-intro />
    <welcome-brief />
    <welcome-frameworks />
    <welcome-contact />
    <welcome-footer />
  </scrollbar>
</template>

<script>
  // Components
  import { Scrollbar } from 'polacoms';

  // Fragments
  import WelcomeHeader from './fragments/welcome-header.vue';
  import WelcomeFooter from './fragments/welcome-footer.vue';
  import WelcomeIntro from './fragments/welcome-intro.vue';
  import WelcomeBrief from './fragments/welcome-brief.vue';
  import WelcomeFrameworks from './fragments/welcome-frameworks.vue';
  import WelcomeContact from './fragments/welcome-contact.vue';

  export default {
    name: 'welcome-index',
    components: {
      Scrollbar,
      WelcomeHeader,
      WelcomeFooter,
      WelcomeIntro,
      WelcomeBrief,
      WelcomeFrameworks,
      WelcomeContact,
    },
  };
</script>

<style lang="less" scoped>

</style>