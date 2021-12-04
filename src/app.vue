<template>
  <responsive-observer>
    <router-view />
  </responsive-observer>
</template>

<script>
  import { ResponsiveObserver } from 'polacoms';
  export default {
    name: 'app',
    components: {
      ResponsiveObserver,
    },
  };
</script>
