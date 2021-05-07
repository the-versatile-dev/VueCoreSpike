<template>
  <counter />
</template>

<script>
// @ is an alias to /src
import Counter from '@/components/home/Counter.vue'

export default {
name: 'DoCounter',
  components: {
    Counter
  }
}
</script>
