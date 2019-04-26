import { TestWindow } from '@stencil/core/testing';
import { SwFilmDetails } from './sw-film-details';

describe('sw-film-details', () => {
  it('should build', () => {
    expect(new SwFilmDetails()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLSwFilmDetailsElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [SwFilmDetails],
        html: '<sw-fil-details></sw-fil-details>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
