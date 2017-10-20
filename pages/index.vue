<template>
<div class="container column justify-content-center align-items-center height">

  <div class="">
    <h3>SVG Charts with vue</h3>
  </div>

  <div class="box-chartz">
    <lineChartz type="line" :data="data" :width="500" :height="100"></lineChartz>
  </div>

  <div class="box-chartz">
    <chartz></chartz>
  </div>

  <div class="box-chartz">
    <lineChartz type="circle" percent="86" :strokeWidth="1"></lineChartz>
  </div>

  <div class="box-chartz">
    <lineChartz type="circle" percent="47" :strokeWidth="3"></lineChartz>
  </div>



</div>
</template>

<script>
import chartz from '@/components/chartz'
import lineChartz from '@/components/line'
export default {
  components: {
    chartz,
    lineChartz
  },
  data() {
    return {
      data: ['0,50', '100,80', '200,10', '300,60', '400,90', '500,50'],
      percent: 47
    }
  }
}
</script>

<style lang="scss">
@import './assets/css/main.scss';
.box-chartz {
  width: 500px;
  max-width: 90%;
  margin-top: 50px;
  border: 1px solid #ddd;

}
.height {
  min-height: 100vh;
  box-sizing: border-box;
  padding-top: 100px;
  padding-bottom: 100px;
}
</style>
