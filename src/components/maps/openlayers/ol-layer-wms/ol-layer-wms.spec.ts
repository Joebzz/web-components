import { TestWindow } from '@stencil/core/testing';
import { OlLayerWms } from './ol-layer-wms';

describe('ol-layer-wms', () => {
  it('should build', () => {
    expect(new OlLayerWms()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLOlLayerWmsElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [OlLayerWms],
        html: '<ol-layer-wms></ol-layer-wms>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
