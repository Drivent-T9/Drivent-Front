import { FaGithub } from 'react-icons/fa';
import Button from '../Form/Button';
import { Row } from '../Auth';
import { githubSignIn } from '../../services/authApi';
import qs from 'query-string';

export default function GitHubSignUp() {

  async function redirectToGitHub() {

    const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
    const params = {
      client_id: import.meta.env.VITE_CLIENT_ID,
      redirect_uri: 'http://localhost:5173/enroll',
      scope: 'user',
      response_type: 'code',
    };

    const queryString = qs.stringify(params);
   
    window.location.href = `${GITHUB_URL}?${queryString}`;
  }


  return (
    <>
      <p style={{ textAlign: 'center' }}>ou</p>
      <Row>
        <Button fullWidth color="secondary" onClick={redirectToGitHub}>
          <FaGithub style={{ marginRight: '8px' }} /> Entrar com o GitHub
        </Button>
      </Row>
    </>
  );
}

export async function verifyIfGitHubCodeExists() {
  const queryParams = new URLSearchParams(window.location.search);
  const code = queryParams.get('code');

  // console.log("code: " , code)

  if(code) {
    try {
      const response = await githubSignIn(code);
      return response;
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log("Code not found in URL parameters.");
  }
}
