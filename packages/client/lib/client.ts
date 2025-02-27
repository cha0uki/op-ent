import RequestClient from './request-client'
import AdminResource from './resources/admin'
import AuthResource from './resources/auth'
import SharedResource from './resources/shared'

export interface Config {
  baseUrl?: string
}

export default class Client {
  private client: RequestClient

  public auth: AuthResource
  public shared: SharedResource
  public admin: AdminResource

  constructor(config: Config) {
    this.client = new RequestClient(config)

    this.auth = new AuthResource(this.client)
    this.client.auth = this.auth

    this.shared = new SharedResource(this.client)
    this.admin = new AdminResource(this.client)
  }
}
