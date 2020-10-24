<script lang="ts">
import { Component } from "vue-property-decorator";
import jobs from "../assets/jobs.json";
import BaseChart from "@/components/BaseChart.vue";
import { DataJson } from "@/types";

const JOBS: DataJson = jobs;

@Component
export default class ChartPopulation extends BaseChart {
    labels = [
        "agriculture",
        "manufacturing",
        "mining",
        "trade",
        "domestic service",
        "professional service",
    ];

    get dataSet() {
        const DATA = JOBS[this.id];
        if (DATA) {
            return Object.values(JOBS[this.id]);
        }
        return [];
    }
}
</script>

<style scoped></style>
