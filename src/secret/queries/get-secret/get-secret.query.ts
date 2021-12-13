import { Secret } from './secret';

export class GetSecretQuery {
  async byId(id: string, body:string, expiresIn:object): Promise<Secret> {
    return new Secret({
      id,
      body: body,
      expiresIn: expiresIn,
    });
  }
}
