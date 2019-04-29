import { newE2EPage } from '@stencil/core/testing';

describe('sw-people-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    expect(page).toBeDefined();

    // await page.setContent('<sw-people-list></sw-people-list>');
    // const element = await page.find('sw-people-list');
    // expect(element).toHaveClass('hydrated');
  });
});