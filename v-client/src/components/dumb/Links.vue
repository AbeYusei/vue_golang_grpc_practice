<template>
  <div>
    <h3>{{ cluster.title }}</h3>
    <ul>
      <li v-for="link in cluster.links" :key="link.value">
        <a :href="link.href" target="_blank" rel="noopener">{{ link.value }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Cluster } from '@/components/model';

@Component
export default class Links extends Vue {
  @Prop() private cluster!: Cluster;
}
</script>

<style scoped lang='scss'>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>