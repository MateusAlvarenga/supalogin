import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {

    }
  }
}
export default function Home(props) {
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

            <Button size="medium" color="error" key="one">
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

