export class CreateSecret {
    public readonly id: string;
    public readonly body: string;
    public readonly password: string | null;
    public readonly expiresIn: string;
  
    constructor(props: CreateSecret) {
    // this.id = id;
    // this.body = body;
    // this.password = password;
    // this.expiresIn = expiresIn;
    Object.assign(this, props);
    }
  }
  