<template lang="pug">
div
    .columns.is-mobile
        .column.has-text-right
            .title USA Analytics
        .column
            SearchState(@found="processSearch")
    .columns
        .column.is-half
            MapUSA(@show-data="showData", :active="stateId")
        .column.is-half
            .columns(v-if="stateId")
                .column.is-half
                    .box
                        p.subtitle {{ $store.state.states[stateId] }} Population
                        ChartPopulation(:id="stateId")
                .column.is-half
                    .box
                        p.subtitle {{ $store.state.states[stateId] }} Jobs
                        ChartJobs(:id="stateId")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MapUSA from "@/components/MapUSA.vue";
import ChartPopulation from "@/components/ChartPopulation.vue";
import ChartJobs from "@/components/ChartJobs.vue";
import SearchState from "@/components/SearchState.vue";
import { State } from "@/types";

@Component({
    components: {
        MapUSA,
        ChartPopulation,
        ChartJobs,
        SearchState,
    },
})
export default class Home extends Vue {
    isModalVisible = false;

    stateId = "";

    showData(id: string) {
        this.stateId = id;
        this.isModalVisible = true;
    }

    processSearch(result: State[]) {
        if (result.length === 1) {
            this.stateId = result[0].id;
        } else {
            this.stateId = "";
        }
    }
}
</script>
