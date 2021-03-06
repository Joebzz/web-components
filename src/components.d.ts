/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface LLayerWms {
    'getLayer': () => Promise<L.Layer>;
    'layer': string;
    'serverType': string;
    'url': string;
  }
  interface LMap {
    'latitude': number;
    'longitude': number;
    'zoom': number;
  }
  interface LineChart {}
  interface MatDialog {
    /**
    * The Dialog Title
    */
    'dialogTitle': string;
    'openDialog': () => Promise<void>;
    /**
    * Whether to show the footer or not
    */
    'showFooter': boolean;
  }
  interface OlLayerWms {
    'getLayer': () => Promise<any>;
    'layer': string;
    'serverType': string;
    'url': string;
  }
  interface OlMap {
    'latitude': number;
    'longitude': number;
    'zoom': number;
  }
  interface SwFilmDetails {
    /**
    * The id for the film
    */
    'filmId': number;
    /**
    * The URL for the film
    */
    'url': string;
  }
  interface SwFilmList {}
  interface SwPeopleList {}
  interface SwPersonDetails {
    /**
    * The id for the person
    */
    'personId': number;
    /**
    * The URL for the person
    */
    'url': string;
  }
}

declare global {


  interface HTMLLLayerWmsElement extends Components.LLayerWms, HTMLStencilElement {}
  var HTMLLLayerWmsElement: {
    prototype: HTMLLLayerWmsElement;
    new (): HTMLLLayerWmsElement;
  };

  interface HTMLLMapElement extends Components.LMap, HTMLStencilElement {}
  var HTMLLMapElement: {
    prototype: HTMLLMapElement;
    new (): HTMLLMapElement;
  };

  interface HTMLLineChartElement extends Components.LineChart, HTMLStencilElement {}
  var HTMLLineChartElement: {
    prototype: HTMLLineChartElement;
    new (): HTMLLineChartElement;
  };

  interface HTMLMatDialogElement extends Components.MatDialog, HTMLStencilElement {}
  var HTMLMatDialogElement: {
    prototype: HTMLMatDialogElement;
    new (): HTMLMatDialogElement;
  };

  interface HTMLOlLayerWmsElement extends Components.OlLayerWms, HTMLStencilElement {}
  var HTMLOlLayerWmsElement: {
    prototype: HTMLOlLayerWmsElement;
    new (): HTMLOlLayerWmsElement;
  };

  interface HTMLOlMapElement extends Components.OlMap, HTMLStencilElement {}
  var HTMLOlMapElement: {
    prototype: HTMLOlMapElement;
    new (): HTMLOlMapElement;
  };

  interface HTMLSwFilmDetailsElement extends Components.SwFilmDetails, HTMLStencilElement {}
  var HTMLSwFilmDetailsElement: {
    prototype: HTMLSwFilmDetailsElement;
    new (): HTMLSwFilmDetailsElement;
  };

  interface HTMLSwFilmListElement extends Components.SwFilmList, HTMLStencilElement {}
  var HTMLSwFilmListElement: {
    prototype: HTMLSwFilmListElement;
    new (): HTMLSwFilmListElement;
  };

  interface HTMLSwPeopleListElement extends Components.SwPeopleList, HTMLStencilElement {}
  var HTMLSwPeopleListElement: {
    prototype: HTMLSwPeopleListElement;
    new (): HTMLSwPeopleListElement;
  };

  interface HTMLSwPersonDetailsElement extends Components.SwPersonDetails, HTMLStencilElement {}
  var HTMLSwPersonDetailsElement: {
    prototype: HTMLSwPersonDetailsElement;
    new (): HTMLSwPersonDetailsElement;
  };
  interface HTMLElementTagNameMap {
    'l-layer-wms': HTMLLLayerWmsElement;
    'l-map': HTMLLMapElement;
    'line-chart': HTMLLineChartElement;
    'mat-dialog': HTMLMatDialogElement;
    'ol-layer-wms': HTMLOlLayerWmsElement;
    'ol-map': HTMLOlMapElement;
    'sw-film-details': HTMLSwFilmDetailsElement;
    'sw-film-list': HTMLSwFilmListElement;
    'sw-people-list': HTMLSwPeopleListElement;
    'sw-person-details': HTMLSwPersonDetailsElement;
  }
}

declare namespace LocalJSX {
  interface LLayerWms extends JSXBase.HTMLAttributes<HTMLLLayerWmsElement> {
    'layer'?: string;
    'serverType'?: string;
    'url'?: string;
  }
  interface LMap extends JSXBase.HTMLAttributes<HTMLLMapElement> {
    'latitude'?: number;
    'longitude'?: number;
    'zoom'?: number;
  }
  interface LineChart extends JSXBase.HTMLAttributes<HTMLLineChartElement> {}
  interface MatDialog extends JSXBase.HTMLAttributes<HTMLMatDialogElement> {
    /**
    * The Dialog Title
    */
    'dialogTitle'?: string;
    /**
    * Whether to show the footer or not
    */
    'showFooter'?: boolean;
  }
  interface OlLayerWms extends JSXBase.HTMLAttributes<HTMLOlLayerWmsElement> {
    'layer'?: string;
    'serverType'?: string;
    'url'?: string;
  }
  interface OlMap extends JSXBase.HTMLAttributes<HTMLOlMapElement> {
    'latitude'?: number;
    'longitude'?: number;
    'zoom'?: number;
  }
  interface SwFilmDetails extends JSXBase.HTMLAttributes<HTMLSwFilmDetailsElement> {
    /**
    * The id for the film
    */
    'filmId'?: number;
    /**
    * The URL for the film
    */
    'url'?: string;
  }
  interface SwFilmList extends JSXBase.HTMLAttributes<HTMLSwFilmListElement> {}
  interface SwPeopleList extends JSXBase.HTMLAttributes<HTMLSwPeopleListElement> {}
  interface SwPersonDetails extends JSXBase.HTMLAttributes<HTMLSwPersonDetailsElement> {
    'onOpenPersonDetails'?: (event: CustomEvent<any>) => void;
    /**
    * The id for the person
    */
    'personId'?: number;
    /**
    * The URL for the person
    */
    'url'?: string;
  }

  interface IntrinsicElements {
    'l-layer-wms': LLayerWms;
    'l-map': LMap;
    'line-chart': LineChart;
    'mat-dialog': MatDialog;
    'ol-layer-wms': OlLayerWms;
    'ol-map': OlMap;
    'sw-film-details': SwFilmDetails;
    'sw-film-list': SwFilmList;
    'sw-people-list': SwPeopleList;
    'sw-person-details': SwPersonDetails;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


