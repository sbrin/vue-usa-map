<script lang="ts">
import { Component } from "vue-property-decorator";
import populations from "../assets/populations.json";
import BaseChart from "@/components/BaseChart.vue";
import { DataJson } from "../types";

const POPULATIONS: DataJson = populations;

@Component
export default class ChartPopulation extends BaseChart {
    labels = ["0-5", "5-14", "14-18", "18-25", "25-45", "45-65", "65+"];

    get dataSet() {
        const DATA = POPULATIONS[this.id];
        if (DATA) {
            return Object.values(POPULATIONS[this.id]);
        }
        return [];
    }
}
</script>

<style scoped></style>
