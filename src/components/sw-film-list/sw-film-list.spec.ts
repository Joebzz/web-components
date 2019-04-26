import { TestWindow } from '@stencil/core/testing';
import { SwFilmList } from './sw-film-list';

describe('sw-film-list', () => {
  it('should build', () => {
    expect(new SwFilmList()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLSwFilmListElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [SwFilmList],
        html: '<sw-film-list></sw-film-list>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
