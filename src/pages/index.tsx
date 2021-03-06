import type { NextPage } from 'next';
import theme, { ThemeContext }  from '../theme';
import Meta from '../components/Core/Meta';
import Page from '../components/Core/Page';
import About from '../components/About';

const Home: NextPage = () => {
  return (
    <>
      <Meta/>
      <ThemeContext.Provider value={theme}>
        <Page name='About'>
          <About/>
        </Page>
      </ThemeContext.Provider>
    </>
  );
}

export default Home
