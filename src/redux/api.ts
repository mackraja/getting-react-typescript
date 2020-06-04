import request from 'superagent';
export interface IRequestParams {
  method: string;
  url: string;
  queryParameters?: { [key: string]: string | boolean | number | Date | undefined };
  body?: Object;
  accessToken?: string;
}

export abstract class ApiService {
  protected async executeRequest<T>(params: IRequestParams) {
    return new Promise<T>((resolve, reject) => {
      let req = request(params.method, params.url)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .withCredentials();

      const queryParameters = params.queryParameters;
      if (queryParameters) {
        req = req.query(queryParameters);
      }
      if (params.accessToken) {
        req.set('Authorization', 'Bearer ' + params.accessToken)
      }
            
      if (params.body) { req.send(params.body); }

      req.end((error: any, response: any) => {
        if (error || !response.ok) {
          if (response && response.body) {
            reject(Object.assign({}, response.body, { code: Number(error.status) }));
            return;
          }
          reject(error);
        } else {
          resolve(response.body);
        }
      });
    });
  }
}

export class Api extends ApiService {
  baseApiUrl: string;
  constructor(url: string) {
    super()
    this.baseApiUrl= url;
  }
  
  public async get(url: string, data: any, query: any, accessToken: string) {
    const requestParams: IRequestParams = {
      method: 'GET',
      url: `${this.baseApiUrl}/${url}`,
      body: data,
      queryParameters: query,
      accessToken: accessToken
    };
    return this.executeRequest(requestParams);
  }

  public async post(url: string, data: any, query: any, accessToken: string) {
    const requestParams: IRequestParams = {
      method: 'POST',
      url: `${this.baseApiUrl}/${url}`,
      body: data,
      queryParameters: query,
      accessToken: accessToken
    };
    return this.executeRequest(requestParams);
  }
  public async put(url: string, data: any, query: any, accessToken: string) {
    const requestParams: IRequestParams = {
      method: 'PUT',
      url: `${this.baseApiUrl}/${url}`,
      body: data,
      queryParameters: query,
      accessToken: accessToken
    };
    return this.executeRequest(requestParams);
  }
  public async patch(url: string, data: any, query: any, accessToken: string) {
    const requestParams: IRequestParams = {
      method: 'PATCH',
      url: `${this.baseApiUrl}/${url}`,
      body: data,
      queryParameters: query,
      accessToken: accessToken
    };
    return this.executeRequest(requestParams);
  }
  public async delete(url: string, data: any, accessToken: string) {
    const requestParams: IRequestParams = {
      method: 'DELETE',
      url: `${this.baseApiUrl}/${url}`,
      body: data,
      accessToken: accessToken
    };
    return this.executeRequest(requestParams);
  }
}
