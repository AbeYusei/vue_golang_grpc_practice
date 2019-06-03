<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,
      <br>check out the
      <a
        href="https://cli.vuejs.org"
        target="_blank"
        rel="noopener"
      >vue-cli documentation</a>.
    </p>

    {{ libraryName }}

    <Links :cluster="clusters.CliPlugins"></Links>
    <Links :cluster="clusters.EssentialLinks"></Links>
    <Links :cluster="clusters.Ecosystem"></Links>

  </div>
</template>y

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import Links from "@/components/dumb/Links.vue";
import { clusters, Cluster } from "@/components";
import { getLibralyNameServiceClient } from '@/proto/SandboxServiceClientPb';
import { getLibraryNameParam } from '@/proto/sandbox_pb';
import { libraryName } from '../../proto/sandbox_pb';

@Component({
  components: {
    Links
  }
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  private clusters = clusters;

  private client!: getLibralyNameServiceClient;

  private libraryName: string = '';

  created() {
    this.client = new getLibralyNameServiceClient('http://0.0.0.0:8001', null, null)
    this.getTotalNum()
  }

  getTotalNum(): void {
    let getRequest = new getLibraryNameParam()
    this.client.getLibralyName(getRequest, {}, (err, res) => {
      this.libraryName = !!err ? `server was errored...` : res.getName();
    });
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='scss'>
</style>
