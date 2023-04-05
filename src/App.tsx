import React from 'react';
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from './views/global/Topbar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from "./views/dashboard"
import Education from "./views/education"
import Experience from './views/experience/index';
import PersonalData from './views/personalData/index';
import Interest from './views/interest/index';
import Sidebar from './views/global/sidebar/Sidebar';
import Layout from './components/Layout/Layout';
import ContactMe from './views/contactMe';

const App = () => {

  const language = useSelector((state: any) => state.settings.language.language);

  const [theme, colorMode] = useMode();

  const style = {
    background: theme.palette.background.default,
  }

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <Sidebar />
          {/* <main className="content"> */}
          <main className="content" style={style}>
            <Topbar />
            <div className='content-body'>
              <Routes>
                <Route path='/' element={<Layout />} >
                  <Route index element={<Dashboard />} />
                  <Route path='education' element={<Education />} />
                  <Route path='experience' element={<Experience />} />
                  <Route path='personal-data' element={<PersonalData />} />
                  <Route path='interests' element={<Interest />} />
                  <Route path='contact-me' element={<ContactMe />} />
                </Route>
              </Routes>
            </div>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
