export class Secret {
    public readonly id : string;
    public readonly body: string;
    public readonly expiresIn: Object;
  
    constructor(props:Secret) {
      Object.assign(this, props);
    }
  }
  