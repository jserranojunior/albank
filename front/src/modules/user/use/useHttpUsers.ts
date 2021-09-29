import useApiConnect from "../../api/use/useApiConnect";
import { AxiosResponse } from "axios";
const ApiConnect = new useApiConnect();
class useHttpAuth {
  async getAllUsers(): Promise<void | AxiosResponse> {
    const urlApi = "/admin/users";
    return ApiConnect.get(urlApi);
  }
}
export default useHttpAuth;
