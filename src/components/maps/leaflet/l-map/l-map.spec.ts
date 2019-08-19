import { TestWindow } from '@stencil/core/testing';
import { LMap } from './l-map';

describe('l-map', () => {
  it('should build', () => {
    expect(new LMap()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLLMapElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [LMap],
        html: '<l-map></l-map>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
