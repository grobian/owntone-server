<template>
  <a :class="{ 'is-info': is_consume }" @click="toggle_consume_mode">
    <mdicon
      class="icon"
      name="fire"
      :size="icon_size"
      :title="$t('player.button.consume')"
    />
  </a>
</template>

<script>
import { usePlayerStore } from '@/stores/player'
import webapi from '@/webapi'

export default {
  name: 'PlayerButtonConsume',
  props: {
    icon_size: { default: 16, type: Number }
  },

  setup() {
    return {
      playerStore: usePlayerStore()
    }
  },

  computed: {
    is_consume() {
      return this.playerStore.consume
    }
  },

  methods: {
    toggle_consume_mode() {
      webapi.player_consume(!this.is_consume)
    }
  }
}
</script>

<style></style>
