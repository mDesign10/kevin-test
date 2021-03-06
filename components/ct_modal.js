(function() {
  
  /**
   * ShadowModal component
   * @container
   */
  class ShadowModal extends HTMLElement {
    
    constructor(self) {
      self = super(self);
      self.isOpen = false;
      return self;
    }
    
    connectedCallback() {
      this._render();
    };
    
    _render() {
      
      const html = `
        <style>
          .modal-bg { display: none; justify-content: center; align-items: flex-start; position: fixed; top: 0; left: 0; width: 100%; height: 100%; padding: 0; background: rgba(0, 0, 0, 0.5); z-index: 9999; overflow: scroll; }
          .modal-bg.open { display: flex; }
          .modal-box { border: 1px solid #ccc; background-color: #fff; padding: 20px 30px; }
        </style>
        <div class="modal-bg">
          <div class="modal-box">
            <slot></slot>
          </div>
        </div>
	  `;
      
      this.$root = this.attachShadow({ mode: 'open' });
      this.$root.innerHTML = html;
    }
    
    /**
     * Open the modal
     */
    open() {
      const modalBg = this.$root.querySelector('.modal-bg');
      modalBg.classList.add('open');
      this.isOpen = true;
    }
    
    /**
     * Close the modal
     */
    close() {
      const modalBg = this.$root.querySelector('.modal-bg');
      modalBg.classList.remove('open');
      this.isOpen = false;
    }
    
    /**
     * Toggle the modal
     */
    toggle() {
      if (this.isOpen) this.close();
      else this.open();
    }
  }
  customElements.define('shadow-modal', ShadowModal);
})();