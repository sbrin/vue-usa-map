<template lang="pug">
BaseMap(:svg="states", @path-click="$emit('show-data', $event)", :active="active")
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import states from "@/assets/states-svg.json";
import BaseMap from "@/components/BaseMap.vue";

@Component({
    components: {
        BaseMap,
    },
})
export default class MapUSA extends Vue {
    @Prop() private active!: string;

    states = states;
}
</script>
