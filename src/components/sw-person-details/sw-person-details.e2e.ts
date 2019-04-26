import { newE2EPage } from '@stencil/core/testing';

describe('sw-person-details', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<sw-person-details></sw-person-details>');
    const element = await page.find('sw-person-details');
    expect(element).toHaveClass('hydrated');
  });
});