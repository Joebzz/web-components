import { Component, h } from '@stencil/core';
// import Plotly from 'plotly.js';

@Component({
    tag: 'chart-scatter',
    styleUrl: 'chart-scatter.scss'
})
export class ChartScatter {
    // @Element() private _element: HTMLElement;
    // private _chartElement: HTMLElement;

    // private _data: Plotly.Data[] = [
    //     {
    //         x: [1, 2, 3, 4],
    //         y: [10, 15, 13, 17],
    //         mode: 'markers',
    //         type: 'scatter'
    //     },
    //     {
    //         x: [2, 3, 4, 5],
    //         y: [16, 5, 11, 9],
    //         mode: 'lines',
    //         type: 'scatter'
    //     },
    //     {
    //         x: [1, 2, 3, 4],
    //         y: [12, 9, 15, 12],
    //         mode: 'lines+markers',
    //         type: 'scatter'
    //     }
    // ];

    // protected componentDidLoad() {
    //     this._chartElement = this._element.querySelector('#chart');
    //     // Plotly.newPlot(this._chartElement, this._data);
    // }

    render() {
        return (
            <div class='chart-container'>
                <h3>Chart</h3>
                <div id='chart'></div>
            </div>
        );
    }
}
