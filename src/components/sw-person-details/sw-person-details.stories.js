import { document, console } from 'global';
import { storiesOf } from '@storybook/html';

storiesOf('sw-person-details', module)
  .add('sw-person-details renders', () => '<sw-person-details></sw-person-details>');
