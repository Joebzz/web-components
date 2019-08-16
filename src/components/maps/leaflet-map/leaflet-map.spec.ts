import { TestWindow } from '@stencil/core/testing';
import { LeafletMap } from './leaflet-map';

describe('leaflet-map', () => {
  it('should build', () => {
    expect(new LeafletMap()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLLeafletMapElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [LeafletMap],
        html: '<leaflet-map></leaflet-map>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
