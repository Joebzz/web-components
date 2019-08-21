import { TestWindow } from '@stencil/core/testing';
import { ChartScatter } from './chart-scatter';

describe('plotly-scatter', () => {
  it('should build', () => {
    expect(new ChartScatter()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLPlotlyScatterElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [ChartScatter],
        html: '<chart-scatter></chart-scatter>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
