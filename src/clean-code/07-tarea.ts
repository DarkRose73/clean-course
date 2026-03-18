// Pre refactorizacion
(() => {

  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

  class HtmlElement {
    constructor(
      public id: string,
      public type: HtmlType,
    ) { }
  }

  class InputAttributes extends HtmlElement {
    constructor(
      public value: string,
      public placeholder: string,
      id: string,
    ) {
      super(id, 'input');
    }
  }

  class InputEvents extends InputAttributes {
    constructor(value: string, placeholder: string, id: string) {
      super(value, placeholder, id);
    }

    setFocus() { };
    getValue() { };
    isActive() { };
    removeValue() { };
  }


  //? Idea para la nueva clase InputElement

  const nameField = new InputEvents('Fernando', 'Enter first name', 'txtName');

  console.log({ nameField });

})();

// Post refactorizacion
(() => {

  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

  class HtmlElement {
    constructor(
      public id: string,
      public type: HtmlType,
    ) { }
  }

  class InputAttributes {
    constructor(
      public value: string,
      public placeholder: string,
    ) { }
  }

  class InputEvents {
    setFocus() { };
    getValue() { };
    isActive() { };
    removeValue() { };
  }


  //? Idea para la nueva clase InputElement

  interface InputElementProps {
    id: string,
    type: HtmlType,
    value: string,
    placeholder: string,
    inputEvents: InputEvents;
  }

  class InputElement {

    public htmlElement: HtmlElement;
    public inputAttributes: InputAttributes;
    public inputEvents: InputEvents;

    constructor({ id, placeholder, type, value, inputEvents }: InputElementProps) {
      this.htmlElement = { id, type };
      this.inputAttributes = { placeholder, value };
      this.inputEvents = inputEvents;
    }

  }

  const nameField = new InputElement({
    id: 'txtName',
    inputEvents: new InputEvents(),
    type: 'input',
    value: 'Fernando',
    placeholder: 'Enter first name',
  });

  console.log({ nameField });

})();

// Solucion Fernando Herrera

(() => {

  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

  class HtmlElement {
    constructor(
      public id: string,
      public type: HtmlType,
    ) { }
  }

  class InputAttributes {
    constructor(
      public value: string,
      public placeholder: string,
    ) { }
  }

  class InputEvents {
    setFocus() { };
    getValue() { };
    isActive() { };
    removeValue() { };
  }


  //? Idea para la nueva clase InputElement

  class InputElement {
    public html: HtmlElement;
    public attributes: InputAttributes;
    public events: InputEvents;
    constructor(value: string, placeholder: string, id: string) {
      this.html = new HtmlElement(id, 'input');
      this.attributes = new InputAttributes(value, placeholder);
      this.events = new InputEvents();
    }
  }

  const nameField = new InputElement('Fernando', 'Enter first name', 'txtName');

  console.log({ nameField });

})();