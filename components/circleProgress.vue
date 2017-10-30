<template>
<div>

    <div class="relative">
      <div class="abs">
        <svg viewbox="0 0 36 36" class="circular-chart" :style="{strokeWidth: strokeWidth}">
          <path class="circle-full" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
          <path class="circle" :stroke="stroke" :stroke-dasharray="percent + ', 100'" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
        </svg>
      </div>
      <div class="quatity">
        <div class="">
          {{percent + '%'}}
        </div>
      </div>
    </div>

</div>
</template>

<script>
export default {
  name: 'chartz',

  props: {
    stroke: {
      type: String,
      default: '#2C00FC'
    },
    percent: {
      type: String
    },
    strokeWidth: {
      type: Number,
      default: 3
    }
  },

  data() {
    return {
      pointsData: [],
      line: [],
      teste: 0
    }
  },

  mounted() {
  }

}
</script>

<style lang="scss" scoped>
.relative {
  position: relative;
  overflow: hidden;
}
.circular-chart {
  width: 100%;
  display: block;
  margin: 10px auto;
  // max-width: 80%;
  // max-height: 250px;
}
.quatity {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: progressbg 1s 1s ease-out backwards;
  cursor: pointer;
  transition: .1s;
  &:hover {
    transform: scale(1.5, 1.5);
  }
}

.circle {
  fill: none;
  stroke-linecap: round;
  animation: progress 1s 1s ease-out backwards;
  transition: .5s;
  position: relative;
  background: red;
  z-index: 2;
}
.circle-full {
  stroke: #ddd;
  fill: none;
  stroke-linecap: round;
  transition: .5s;
  animation: progressbg 1s ease-out forwards;
  z-index: 1;

}
@keyframes progressbg {
  0% {
    opacity: 0
  }
}
@keyframes progress {
  0% {
    stroke-dasharray: 0 100;
  }
}








svg {
    position: relative;
    width: 100%;
    transition: .5s;
    cursor: pointer;
}
</style>
