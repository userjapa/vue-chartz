<template>
<div>

  <div v-if="type == 'line'" class="mark" :style="{width: width + 'px; max-width: 100%'}">
    <svg xmlns="http://www.w3.org/2000/svg" class="mark" xmlns:xlink="http://www.w3.org/1999/xlink" :viewBox="'0 0 ' + width + ' ' + height" :width="width" :height="height">
      <polyline class="line color1" :points="data"/>
      <circle class="pcolor1" v-for="x in pointsData" :cx="x[0]" :cy="x[1]"  r="5" fill="#333" />
    </svg>
  </div>

  <div v-if="type == 'circle'" class="">

    <div class="relative">

      <div class="abs">
        <svg viewbox="0 0 36 36" class="circular-chart" :style="{strokeWidth: strokeWidth}">
          <path class="circle" :stroke-dasharray="percent + ', 100'" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
          <path class="circle-full" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
        </svg>
      </div>

      <div class="quatity">
        <div class="">
          {{percent + '%'}}
        </div>
      </div>
    </div>

  </div>

</div>
</template>

<script>
export default {
  name: 'chartz',

  props: {
    type: {
      type: String
    },
    data: {
      type: Array,
      default: []
    },
    width: {
      type: Number
    },
    height: {
      type: Number
    },
    size: {
      type: Number
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
    convert: {
      this.data.map((data, index) => {
        this.pointsData.push(data.split(","))
      })
    }
  }

}
</script>

<style lang="scss" scoped>
.relative {
  position: relative;
  overflow: hidden;
}
.circular-chart {
  width: 33%;
  display: block;
  margin: 10px auto;
  max-width: 80%;
  max-height: 250px;
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
  stroke: blue;
  opacity: .7;
  fill: none;
  stroke-linecap: round;
  animation: progress 1s 1s ease-out backwards;
  transition: .5s;
  position: relative;
  background: red;
}
.circle-full {
  stroke: blue;
  opacity: .1;
  fill: none;
  stroke-linecap: round;
  transition: .5s;
  animation: progressbg 1s ease-out forwards;

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












.line {
    fill: none;
    stroke-width: 5;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 10;
    opacity: 0.7;
    animation-name: show;
    animation-duration: 1s;
    animation-fill-mode: backwards;
    animation-timing-function: ease-in;
    transition: 0.5s;
    transform-origin: 50%;
    z-index: 1;
    cursor: pointer;
    &:hover {
        opacity: 1;
    }
}
@keyframes show {
    from {
        opacity: 0;
    }
    to {}
}
.color1 {
    stroke: blue;
}
.pcolor1 {
    fill: blue;
}

.pcolor1 {
    animation-name: show;
    animation-duration: 0.5s;
    animation-delay: 1s;
    animation-fill-mode: backwards;
    animation-timing-function: ease-in;
    transition: 0.1s;
    transform-origin: 50%;
    opacity: 0.7;
    cursor: pointer;
    &:hover {
        opacity: 1;
        transform: scale(1.5, 1.5);
    }
}

.mark {
    position: relative;
    overflow: hidden;
    &:before {
        content: "";
        background: #ddd;
        width: 100%;
        height: 1px;
        position: absolute;
        top: 50%;
        left: 0;
    }
}
svg {
    position: relative;
    width: 100%;
    transition: .5s;
    cursor: pointer;
}
</style>
