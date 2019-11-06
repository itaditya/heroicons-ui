class IconHashtagIcon extends HTMLElement {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em"><path d="M11.03 8h3.94l1.06-4.24a1 1 0 111.94.48L17.03 8H20a1 1 0 010 2h-3.47l-1 4H18a1 1 0 110 2h-2.97l-1.06 4.25a1 1 0 11-1.94-.49l.94-3.76H9.03l-1.06 4.25a1 1 0 11-1.94-.49L6.97 16H4a1 1 0 010-2h3.47l1-4H6a1 1 0 010-2h2.97l1.06-4.24a1 1 0 111.94.48L11.03 8zm-.5 2l-1 4h3.94l1-4h-3.94z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("icon-hashtag-icon", IconHashtagIcon);
