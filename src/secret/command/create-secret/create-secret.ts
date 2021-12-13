export class CreateSecret {
    public readonly id: string;
    public readonly body: string;
    public readonly password: string | null;
    public readonly expiresIn: string;
  
    constructor({id, body, password, expiresIn}: CreateSecret) {
    this.id = id;
    this.body = body;
    this.password = password;
    this.expiresIn = expiresIn;
    }
  }
  