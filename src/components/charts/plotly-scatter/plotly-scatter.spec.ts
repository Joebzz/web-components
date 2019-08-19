import { TestWindow } from '@stencil/core/testing';
import { PlotlyScatter } from './plotly-scatter';

describe('plotly-scatter', () => {
  it('should build', () => {
    expect(new PlotlyScatter()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLPlotlyScatterElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [PlotlyScatter],
        html: '<plotly-scatter></plotly-scatter>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
