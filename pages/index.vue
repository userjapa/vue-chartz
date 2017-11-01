<template>
<div class="container column justify-content-center align-items-center height">

  <div class="box-chartz container">
    <circleProgress percent="47" :strokeWidth="3"/>

    <circleProgress percent="69" :strokeWidth="2"/>

    <circleProgress percent="96" :strokeWidth="1" stroke="red"/>
  </div>

   <div class="box-chartz">
    <lineProgress type="line" :strokeWidth="5" :data="data" :height="100"></lineProgress>
  </div>


  <!-- <div class="box-chartz">
    <chartz></chartz>
  </div> -->




</div>
</template>

<script>
import chartz from '@/components/chartz'

import circleProgress from '@/components/circleProgress'
import lineProgress from '@/components/lineProgress'
export default {
  components: {
    chartz,
    circleProgress,
    lineProgress
  },
  data() {
    return {
      data: [50, 80, 10]
    }
  }
}
</script>

<style lang="scss">
@import './assets/css/main.scss';
.box-chartz {
  width: 700px;
  max-width: 90%;
  margin-top: 50px;
  border: 1px solid #ddd;

}
.height {
  box-sizing: border-box;
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>
