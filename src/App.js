import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {EpisodesPage} from "./pages";

export const App = () => {
  return (
      <Routes>
          <Route path={'/'} element={<MainLayout/>}>
              <Route index element={<Navigate to={'episodes'}/>}/>
              <Route path={'episodes'} element={<EpisodesPage/>}/>

          </Route>


      </Routes>
  )
}