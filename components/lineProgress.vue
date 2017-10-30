<template>
<div>

  <div v-if="type == 'line'" class="mark" style="width: 100%; max-width: 100%">
    <svg xmlns="http://www.w3.org/2000/svg" class="mark" xmlns:xlink="http://www.w3.org/1999/xlink" :viewBox="'0 0 ' + width + ' ' + height">

      <polyline class="line color1" :points="data"/>


      <circle class="pcolor1" v-for="x in pointsData" :cx="x[0]" :cy="x[1]"  r="5" fill="#333" />
    </svg>

  </div>
  {{dataSize}}


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
    }
  },

  data() {
    return {
      pointsData: [],
      line: [],
      dataSize: 0
    }
  },

  mounted() {
    this.dataSize = this.data.length
    console.log("size: " + this.dataSize)


    setLine: {
      this.data.map((pointsData, index) => {
        console.log(pointsData)
      })
    }

    convert: {
      this.data.map((data, index) => {
        this.pointsData.push(data.split(","))
        return
      })
    }
  }

}
</script>

<style lang="scss" scoped>
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
