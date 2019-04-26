import { newE2EPage } from '@stencil/core/testing';

describe('sw-film-details', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<sw-film-details></sw-film-details>');
    const element = await page.find('sw-film-details');
    expect(element).toHaveClass('hydrated');
  });
});
