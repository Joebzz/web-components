import { Component, Method, Prop } from '@stencil/core';

import ImageLayer from 'ol/layer/Image';
import ImageWMS from 'ol/source/ImageWMS';

@Component({
    tag: 'ol-layer-wms',
    styleUrl: 'ol-layer-wms.scss'
})
export class OlLayerWms {
    @Prop() url: string;
    @Prop() layer: string;
    @Prop() serverType: string;
    private _layer: any;
    private _source: any;

    componentDidLoad() {
        this._layer = new ImageLayer({
            //extent: [-13884991, 2870341, -7455066, 6338219],
            source: new ImageWMS({
                url: this.url,
                params: { 'LAYERS': 'TOPO-OSM-WMS' },
                ratio: 1,
                serverType: 'geoserver'
            })
        });
    }

    @Method()
    async getLayer() {
        return this._layer;
    }

    @Method()
    async getSource() {
        return this._source;
    }
}
