export class Secret {
    public readonly id : string;
    public readonly body: string;
    public readonly expiresIn: Object;
  
    constructor({id , body , expiresIn}:Secret) {
      this.id = id;
      this.body = body;
      this.expiresIn = expiresIn;
    }
  }
  