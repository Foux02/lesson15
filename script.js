'use strict';

const DomElement = function (sel, h, wid, bg, fS) {
  this.selector = sel;
  this.height = h;
  this.width = wid;
  this.bg = bg;
  this.fontSize = fS;

  this.newElement = function (text) {
    this.newText = document.createElement('div');
    document.body.prepend(this.newText);

    if (this.selector[0] === '.') {
      this.newText.className = this.selector.substring(1);
    } else {
      this.newText.id = this.selector.substring(1);
    }

    this.newText.append(text);

    this.newText.style.cssText += `
  height: ${h}px;
  width: ${wid}px;
  background: ${bg};
  font-size: ${fS}px;
  display: flex;
  justify-content: center;
  align-items: center
`;
  };
};

const newBlock = new DomElement('.best', '200', '300', 'green', '55');

newBlock.newElement('I am happy');
