<template lang="pug">
svg#svg(
    xmlns="http://www.w3.org/2000/svg",
    viewBox="0 0 1000 589",
    version="1.1",
    stroke-linejoin="round"
)
    path(
        v-for="path in svg",
        :key="path.id",
        :id="path.id",
        :d="path.d",
        stroke-width=".971",
        @click="$emit('path-click', path.id)",
        :fill="active === path.id ? '#555' : '#eee'"
    )
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { MapPath } from "../types";

@Component({
    components: {},
})
export default class BaseMap extends Vue {
    @Prop() private svg!: MapPath[];
    @Prop() private active!: string;
}
</script>

<style scoped>
path {
    stroke: #555;
}
path:hover {
    fill: #555;
    cursor: pointer;
}
</style>
