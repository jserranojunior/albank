import useApiConnect from "../../api/use/useApiConnect";
import { AxiosResponse } from "axios";
const ApiConnect = new useApiConnect();
class useHttpAuth {
  async login(data: Record<string, unknown>): Promise<void | AxiosResponse> {
    const urlApi = "/login";
    return ApiConnect.postWithoutToken(urlApi, data);
  }

  async register(data: Record<string, unknown>): Promise<void | AxiosResponse> {
    const urlApi = "/user";
    return ApiConnect.postWithoutToken(urlApi, data);
  }

  async getUser(): Promise<void | AxiosResponse> {
    const urlApi = "/user";
    return ApiConnect.get(urlApi);
  }
}

export default useHttpAuth;

// export const useHttpAuth = () => {

//   return { login };
// };
