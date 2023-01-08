import React from 'react';
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from "@mui/material";
// import { ColorModeContext, useMode } from "./theme";
import { ColorModeContext, useMode } from "./theme";
import Topbar from './views/global/Topbar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from "./views/dashboard"
import Education from "./views/education"
import Experience from './views/experience/index';
import PersonalData from './views/personalData/index';
import Interest from './views/interest/index';
import Sidebar from './views/global/sidebar/Sidebar';

const App = () => {

  const language = useSelector((state: any) => state.settings.language.language);

  const [theme, colorMode] = useMode();
  // const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/education' element={<Education />} />
              <Route path='/experience' element={<Experience />} />
              <Route path='/personal-data' element={<PersonalData />} />
              <Route path='/interests' element={<Interest />} />
            </Routes>
          </main>
        </div>
       </ThemeProvider>
     </ColorModeContext.Provider>
  );
};

export default App;
