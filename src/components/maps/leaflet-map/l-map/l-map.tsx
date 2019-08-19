import { h, Component, Element, Prop } from '@stencil/core';
import L from 'leaflet';

@Component({
    tag: 'l-map',
    styleUrl: 'l-map.scss'
})
export class LMap {
    @Element() private el: HTMLElement;
    @Prop() latitude: number;
    @Prop() longitude: number;
    @Prop() zoom: number;
    private _mapElement: HTMLElement;

    private _map: L.Map;

    private oceanLayer: L.TileLayer = L.tileLayer('//services.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}.png', {
        attribution: 'Esri Ocean Basemap - &copy; Esri, GEBCO, NOAA, National Geographic, DeLorme, HERE, Geonames.org, INFOMAR and other contributors',
        noWrap: true,
        minZoom: 4,
        maxZoom: 12
    });

    protected componentDidLoad() {
        this._mapElement = this.el.querySelector('#map');
        this._map = new L.Map(this._mapElement,
            {
                center: [this.latitude, this.longitude],
                zoom: this.zoom,
                layers: [this.oceanLayer]
            }
        );
        this.addChildLayers();
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
                <div id="map" class="leaflet-container"></div>
                <div id="mapLayers">
                    <slot></slot>
                </div>
            </div>
        );
    }
}
