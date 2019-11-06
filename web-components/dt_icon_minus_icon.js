class DtIconMinusIcon extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
    <style>
      svg {
        display: inline-block;
        vertical-align: middle;
        
      }
    </style>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="2em" width="1em"><path d="M17 11a1 1 0 010 2H7a1 1 0 010-2h10z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("dt-icon-minus-icon", DtIconMinusIcon);
