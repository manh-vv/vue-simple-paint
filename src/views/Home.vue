<template>
  <v-container>
    <v-row>
      <v-col>
        <h3>
          Drawing
        </h3>
      </v-col>
    </v-row>

    <v-row>
      <v-col md="8">
        <div id="simple-paint"></div>
      </v-col>

      <v-col md="4" v-if="this.paint">
        <div class="mb-4">
          <v-btn
            :color="currentPen.name == 'pencil' ? currentPen.colorHex : ''"
            aria-label="pencil"
            fab
            small
            class="mr-2"
            @click="() => setPen('pencil')"
            ><v-icon>mdi-pencil</v-icon></v-btn
          >
          <v-btn
            :color="currentPen.name == 'brush' ? currentPen.colorHex : ''"
            aria-label="brush"
            fab
            small
            class="mr-2"
            @click="() => setPen('brush')"
            ><v-icon>mdi-brush</v-icon></v-btn
          >
          <v-btn
            :color="currentPen.name == 'broom' ? currentPen.colorHex : ''"
            aria-label="broom"
            fab
            small
            class="mr-2"
            @click="() => setPen('broom')"
            ><v-icon>mdi-broom</v-icon></v-btn
          >
          <v-btn
            :color="currentPen.name == 'eraser' ? '#afafaf' : ''"
            aria-label="eraser"
            fab
            small
            @click="() => setPen('eraser')"
            ><v-icon>mdi-eraser</v-icon></v-btn
          >
        </div>
        <v-color-picker
          class="mb-4"
          mode="hexa"
          v-model="color"
          @update:color="setColor"
        ></v-color-picker>
        <div>
          <v-btn aria-label="wipe" @click="erase"><v-icon>mdi-eraser-variant</v-icon></v-btn>
        </div>
        <div></div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Paint } from '../service/Paint';

export default {
  name: 'Home',
  data() {
    return {
      color: {
        alpha: 1,
        hex: '#00CC99',
        hexa: '#00CC99FF',
        hsla: { h: 165, s: 1, l: 0.4, a: 1 },
        hsva: { h: 165, s: 1, v: 0.8, a: 1 },
        hue: 165,
        rgba: { r: 0, g: 204, b: 153, a: 1 },
      },
      paint: null,
    };
  },
  computed: {
    currentPen() {
      if (!this.paint) {
        return {
          name: '',
          colorHex: '',
        };
      }

      return {
        name: this.paint.pen.name,
        colorHex: this.paint.pen.color.hex,
      };
    },
  },
  mounted() {
    // setup paint
    this.$nextTick(() => {
      const paint = new Paint();
      paint.setup();
      this.paint = paint;
      this.color = paint.pen.color;
    });
  },
  methods: {
    setPen(name) {
      this.paint.setPen(name);
      this.color = this.paint.pen.color;
    },
    erase(e) {
      this.paint.erase();
    },
    setColor(c) {
      if (this.paint) {
        this.paint.pen.color = c;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
#simple-paint {
  height: 420px;
}
</style>
