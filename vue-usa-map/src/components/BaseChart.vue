<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { Bar, mixins } from "vue-chartjs";
const { reactiveData } = mixins;

@Component({
    extends: Bar,
    mixins: [reactiveData],
})
export default class BaseChart extends Vue {
    @Prop() id!: string;

    @Watch("id")
    onIdChanged() {
        this.chartUpdate();
    }
    options = {
        legend: {
            display: false,
        },
    };

    labels: string[] = [];

    get dataSet(): number[] {
        return [];
    }

    chartColors = [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
        "rgb(20, 20, 20)",
    ];

    mounted() {
        this.chartUpdate();
    }
    chartUpdate() {
        const chartData = {
            labels: this.labels,
            datasets: [
                {
                    backgroundColor: this.chartColors,
                    data: this.dataSet,
                },
            ],
        };
        // @ts-ignore
        this.renderChart(chartData, this.options);
    }
}
</script>

<style scoped>
</style>