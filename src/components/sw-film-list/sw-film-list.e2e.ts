import { newE2EPage } from '@stencil/core/testing';

describe('sw-film-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<sw-film-list></sw-film-list>');
    const element = await page.find('sw-film-list');
    expect(element).toHaveClass('hydrated');
  });
});