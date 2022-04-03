export interface APIRequestResponse {
  success: boolean,
  message: string,
  payload: any
}

export interface APIResquestError {
  error: string,
  code: number,
  message: string
}
