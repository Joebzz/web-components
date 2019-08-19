import { Component, Method, Prop } from '@stencil/core';

import L from 'leaflet';

@Component({
    tag: 'l-layer-wms',
    styleUrl: 'l-layer-wms.scss'
})
export class LLayerWms {
    @Prop() url: string;
    @Prop() layer: string;
    @Prop() serverType: string;
    private _layer: L.Layer;

    componentDidLoad() {
        this._layer = L.tileLayer.wms(this.url, {
            layers: this.layer,
            transparent: true,
            format: 'image/png'
        });
    }

    @Method()
    async getLayer() {
        return this._layer;
    }
}
