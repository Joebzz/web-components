import { h, Component, Element, Prop } from '@stencil/core';

import { Map, View } from 'ol';
import { fromLonLat } from 'ol/proj';
import { Tile } from 'ol/layer';
import { OSM } from 'ol/source';

@Component({
    tag: 'ol-map',
    styleUrl: 'ol-map.scss'
})
export class OLMap {
    @Element() el: HTMLElement;
    @Prop() latitude: number;
    @Prop() longitude: number;
    @Prop() zoom: number;
    private _map: Map;
    private _mapElement: HTMLElement;

    protected componentDidLoad() {
        if (this._map) return;
        this._mapElement = this.el.querySelector('#map');
        this._map = new Map({
            loadTilesWhileAnimating: true,
            view: new View({
                center: fromLonLat([this.longitude, this.latitude]),
                zoom: this.zoom
            }),
            layers: this.getBaseLayers(),
            target: this._mapElement
        });
        this.addChildLayers();
    }

    getBaseLayers() {
        let layers = [];
        // Add a base layer    
        layers.push(new Tile({
            source: new OSM()
        }));
        return layers;
    }

    addChildLayers() {
        let children = this.el.querySelector('#mapLayers').childNodes;
        for (let i = 0; i < children.length; i++) {
            let child = (children[i] as any);
            if (child.getLayer) {
                child.getLayer().then((res) => {
                    this._map.addLayer(res);
                });
            }
        }
    }

    render() {
        return (
            <div class="map-container">
                <div id="map" class="map">
                </div>
                <div id="mapLayers">
                    <slot></slot>
                </div>
            </div>
        );
    }
}
