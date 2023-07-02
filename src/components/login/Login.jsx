import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

function Login() {
  let navigate = useNavigate();

  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const login = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // const user = result.user;
        // console.log('user;', user);
        navigate('/home');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // const email = error.customData.email;
        // const credential = GoogleAuthProvider.credentialFromError(error);
        console.error(errorCode, errorMessage);
      });
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        m: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button onClick={login}>
        <img src="https://i.imgur.com/BSn1dNq.png" alt="Sign in with Google" />
      </Button>
    </Box>
  );
}

export default Login;
