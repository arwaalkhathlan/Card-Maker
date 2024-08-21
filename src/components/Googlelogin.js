import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Googlelogin = () => {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
        console.log("Login Success", credentialResponseDecoded);
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

export default Googlelogin;
