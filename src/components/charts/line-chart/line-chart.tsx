import { Component, Element, h } from '@stencil/core';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

@Component({
    tag: 'line-chart',
    styleUrl: 'line-chart.scss'
})
export class LineChart {
    @Element() private _element: HTMLElement;
    private _chartElement: HTMLElement;
    private _chart: am4charts.XYChart;

    private populateChartData() {
        let data = [];
        let value = 50;
        for (let i = 0; i < 300; i++) {
            let date = new Date();
            date.setHours(0, 0, 0, 0);
            date.setDate(i);
            value -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
            data.push({ date: date, value: value });
        }

        this._chart.data = data;
    }

    protected componentDidLoad() {
        am4core.useTheme(am4themes_animated);
        this._chartElement = this._element.querySelector('#chart');
        console.log(this._chartElement);
        this._chart = am4core.create(this._chartElement, am4charts.XYChart);

        // Populate some Data
        this.populateChartData();

        // Create axes
        var dateAxis = this._chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.minGridDistance = 60;

        this._chart.yAxes.push(new am4charts.ValueAxis());

        // Create series
        var series = this._chart.series.push(new am4charts.LineSeries());
        series.dataFields.valueY = "value";
        series.dataFields.dateX = "date";
        series.tooltipText = "{value}"

        series.tooltip.pointerOrientation = "vertical";

        this._chart.cursor = new am4charts.XYCursor();
        this._chart.cursor.snapToSeries = series;
        this._chart.cursor.xAxis = dateAxis;

        //chart.scrollbarY = new am4core.Scrollbar();
        this._chart.scrollbarX = new am4core.Scrollbar();
    }

    render() {
        return (
            <div>
                <div id="chart"></div>
            </div>
        );
    }
}
