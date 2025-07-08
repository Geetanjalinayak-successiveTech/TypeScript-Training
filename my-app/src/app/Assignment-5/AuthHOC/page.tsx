import WithAuth from "../Component/withAuth";
import Authenticate from "../Component/authenticatePage";


const Res= WithAuth(Authenticate)
export default function App()
{
   return  <Res/>
}