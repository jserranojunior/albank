import useApiConnect from "../../api/use/useApiConnect";
import { AxiosResponse } from "axios";

class useHttpAuth {
  async getAllUsers(): Promise<void | AxiosResponse> {
    const ApiConnect = new useApiConnect();
    const urlApi = "/admin/users";
    return ApiConnect.get(urlApi);
  }
}
export default useHttpAuth;
