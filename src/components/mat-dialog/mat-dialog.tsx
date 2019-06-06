import { Component, Prop, Method, h } from '@stencil/core';
import { MDCDialog } from '@material/dialog';

@Component({
  tag: 'mat-dialog',
  styleUrl: 'mat-dialog.scss',
  shadow: false
})
export class MATDialog {
  /**
   * The Dialog Title
   */
  @Prop() dialogTitle: string;

  /**
   * Whether to show the footer or not
   */
  @Prop() showFooter: boolean = false;

  // Store the dialog element here
  private dialog: any;

  protected componentDidLoad() {
    this.dialog = new MDCDialog(document.querySelector('.mdc-dialog'));
  }

  @Method()
  openDialog() {
    this.dialog.open();
  }

  render() {
    return (
      <aside class="mdc-dialog"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="mat-dialog-title"
        aria-describedby="mat-dialog-content">
        <div class="mdc-dialog__container">
          <div class="mdc-dialog__surface">
            <h2 class="mdc-dialog__title" id="mat-dialog-title">{this.dialogTitle}</h2>
            <div class="mdc-dialog__content" id="mat-dialog-content">
              <slot name="dialog-content"></slot>
            </div>
            {this.showFooter
              ? <footer class="mdc-dialog__actions">
                <button type="button" class="mdc-button mdc-dialog__button" data-mdc-dialog-action="no">
                  <span class="mdc-button__label">No</span>
                </button>
                <button type="button" class="mdc-button mdc-dialog__button" data-mdc-dialog-action="yes">
                  <span class="mdc-button__label">Yes</span>
                </button>
              </footer>
              : ''
            }
          </div>
        </div>
        <div class="mdc-dialog__scrim"></div>
      </aside>
    );
  }
}
