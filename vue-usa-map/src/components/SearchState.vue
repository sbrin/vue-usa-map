<template lang="pug">
section
    b-input(
        placeholder="Find a state",
        v-model.trim="request",
        icon-right="close",
        icon-right-clickable,
        @icon-right-click="clearIconClick"
    )
    b-dropdown(
        aria-role="list",
        ref="dropdown",
        scrollable,
        max-height="300",
        v-show="request.length > 0 && searchResults.length > 1",
        style="position: absolute"
    )
        b-dropdown-item(
            v-for="item in searchResults",
            :key="item.id",
            aria-role="listitem",
            @click="selectItem(item)"
        ) {{ item.name }}
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import states from "@/assets/states.json";
import { MapJson } from "@/types";
import { State } from "@/types";

const STATES: MapJson = states;

interface Dropdown extends Vue {
    isActive: boolean;
}

@Component
export default class SearchState extends Vue {
    $refs!: {
        dropdown: Dropdown;
    };

    request = "";

    searchResults: State[] = [];

    @Watch("request")
    onRequestChange(request: string) {
        this.findState(request);
    }

    findState(input: string) {
        const statesArr = Object.keys(STATES).map((key) => ({
            id: key,
            name: STATES[key],
        }));
        const result = statesArr.filter(
            (item) => ~item.name.toLowerCase().indexOf(input.toLowerCase())
        );

        if (result.length > 1) {
            this.searchResults = result;
            this.$refs.dropdown.isActive = true;
        } else {
            this.searchResults = [];
            this.$refs.dropdown.isActive = false;
            this.$emit("found", result);
        }
    }

    selectItem(item: State) {
        this.request = item.name;
        this.$emit("found", [item]);
    }

    clearIconClick() {
        this.request = "";
    }
}
</script>
