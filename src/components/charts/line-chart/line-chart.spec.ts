import { TestWindow } from '@stencil/core/testing';
import { LineChart } from './line-chart';

describe('line-chart', () => {
  it('should build', () => {
    expect(new LineChart()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLLineChartElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [LineChart],
        html: '<line-chart></line-chart>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
