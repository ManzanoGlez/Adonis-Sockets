<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

import WsSubscriptions from './components/WsSubscriptions'


export default {
  name: 'App',
  async created(){ await WsSubscriptions() },

}
</script>
