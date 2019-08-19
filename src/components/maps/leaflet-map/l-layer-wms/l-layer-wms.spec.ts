import { TestWindow } from '@stencil/core/testing';
import { LLayerWms } from './l-layer-wms';

describe('l-layer-wms', () => {
  it('should build', () => {
    expect(new LLayerWms()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLLLayerWmsElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [LLayerWms],
        html: '<l-layer-wms></l-layer-wms>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
