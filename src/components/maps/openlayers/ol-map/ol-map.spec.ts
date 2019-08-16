import { TestWindow } from '@stencil/core/testing';
import { OLMap } from './openlayers-map';

describe('openlayers-map', () => {
  it('should build', () => {
    expect(new OLMap()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLOLMapElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [OLMap],
        html: '<openlayers-map></openlayers-map>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
