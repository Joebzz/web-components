import { Component, Element, h } from '@stencil/core';

import Chart from 'chart.js';

@Component({
    tag: 'line-chart',
    styleUrl: 'line-chart.scss'
})
export class LineChart {
    @Element() private _element: HTMLElement;
    private _chart: Chart;
    private _data: any = [65, 59, 80, 81, 56, 55, 40];
    private _data2: any = [40, 55, 56, 84, 80, 59, 65];

    protected componentDidLoad() {
        const canvas: HTMLCanvasElement = this._element.querySelector('#chart')
        const context: CanvasRenderingContext2D = canvas.getContext('2d');
        const chartConfig: Chart.ChartConfiguration =
        {
            "type": "line",
            "data": {
                "labels": ["January", "February", "March", "April", "May", "June", "July"],
                "datasets":
                    [
                        {
                            "label": "My First Dataset",
                            "data": this._data,
                            "fill": false,
                            "borderColor": "rgb(75, 192, 192)",
                            "lineTension": 0
                        },
                        {
                            "label": "My Second Dataset",
                            "data": this._data2,
                            "fill": false,
                            "borderColor": "#4287f5",
                            "lineTension": 0
                        }
                    ]
            }
        };
        this._chart = new Chart(context, chartConfig);
        console.log(this._chart);
    }

    render() {
        return (
            <div>
                <canvas id="chart"></canvas>
            </div>
        );
    }
}
