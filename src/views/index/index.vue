<template>
  <div class="index">
    <div class="content">
       <router-view/>
    </div>
    <div class="header">
     <Nav></Nav>
     <div style="height:80px;"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Nav from '../../components/nav/index.vue'
@Component({
  components:{
    Nav
  }
})
export default class HelloWorld extends Vue {
  
}
</script>
<style scoped lang="scss">
</style>
