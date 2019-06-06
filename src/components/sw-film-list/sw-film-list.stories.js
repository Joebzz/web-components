import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import './sw-film-list.tsx';

storiesOf('sw-film-list', module)
  .add('sw-film-list renders', () => '<sw-film-list></sw-film-list>');
