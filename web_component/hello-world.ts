import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('hello-world')
export class HelloWorld extends LitElement {
    static override styles = css`
    p { 
        color: blue 
    }`;

    // Here we can set the default values for a component
    @property()
    name = 'World';

    override render() {
        return html`<h3>Hello, ${this.name}!</h3>`;
    }
}