import { document, console } from 'global';
import { storiesOf } from '@storybook/html';

storiesOf('mat-dialog', module)
  .add('button', () => {
    const dialogElement = document.createElement('mat-dialog');
    dialogElement.innerHTML = "<p slot='dialog-content' id='dialogContent'>Test Static</p>";
    
    const button = document.createElement('button');
    button.type = 'button';
    button.innerText = 'Hello Button';
    button.addEventListener('click', () => {
        let dialog = document.querySelector('mat-dialog');
        dialog.dialogTitle = 'Test Title';
        let dialogContent = dialog.querySelector('#dialogContent');
        console.log(dialogContent);
        dialogContent.innerHTML = 'Test Content';

        dialog.openDialog();
    } );
    return button;
  });
