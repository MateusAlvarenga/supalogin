import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import supabase from '../utils/supabaseClient'


export async function getStaticProps() {

  return {
    props: {

    }
  }
}

export default function Home(props) {


  async function signInWithGoogle() {
    const { user, session, error } = await supabase.auth.signIn({
      provider: 'google',
    })
  }

  return (
    <Layout >
      <section className={utilStyles.flexCenter}>
        <h1 className="text-3xl font-bold underline">
          Login
        </h1>
      </section>
      <section className={utilStyles.headingMd}>
        <Box className={utilStyles.flexCenter}>
          <ButtonGroup
            orientation="vertical"
            aria-label="vertical contained button group"
            variant="contained">

            <Button size="medium" color="error" key="one" onClick={() => signInWithGoogle()}>
              <GoogleIcon /> Google
            </Button>

            <Button size="medium" className={utilStyles.bgBlack} key="two" >
              <GitHubIcon /> Github
            </Button>

          </ButtonGroup>

        </Box>
      </section>
    </Layout>
  )
}

