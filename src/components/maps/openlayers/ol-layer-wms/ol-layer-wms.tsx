import { Component, Method, Prop } from '@stencil/core';

import { Image } from 'ol/layer';
import { ImageWMS } from 'ol/source';

@Component({
    tag: 'ol-layer-wms',
    styleUrl: 'ol-layer-wms.scss'
})
export class OlLayerWms {
    @Prop() url: string;
    @Prop() layer: string;
    @Prop() serverType: string = 'geoserver';
    private _layer: any;

    componentDidLoad() {
        this._layer = new Image({
            //extent: [-13884991, 2870341, -7455066, 6338219],
            source: new ImageWMS({
                url: this.url,
                params: { 'LAYERS': this.layer },
                ratio: 1,
                serverType: this.serverType
            })
        });
    }

    @Method()
    async getLayer() {
        return this._layer;
    }
}
