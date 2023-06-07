// import { Button, Stack } from '@mui/material'
// import { Delete, Send, Photo } from '@mui/icons-material'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthLayout from './layouts/AuthLayout.tsx'
import BackendLayout from './layouts/BackendLayout.tsx'

import Dashboard from "./pages/Dashboard.tsx"
import Product from "./pages/Product.tsx"
import Report from "./pages/Report.tsx"
import Setting from "./pages/Setting.tsx"
import { DASHBOARD_PATH, PRODUCT_PATH, REPORT_PATH, SETTING_PATH } from './config/constants.ts'

function App() {



  // return (
  //   // <>
  //   //   <h1>mui Button+TS</h1>
  //   //   <Stack spacing={2} direction={'row'}>
  //   //     <Button variant='text'>text</Button>
  //   //     <Button variant='contained'>text</Button>
  //   //     <Button variant='outlined'>text</Button>
  //   //   </Stack>
  //   //   <h1>MUI  button icon</h1>
  //   //   <Stack spacing={2} direction={'row'}>
  //   //     <><Button variant='text' startIcon={<Delete />}>text</Button></>
  //   //     <><Button variant='contained' startIcon={<Send />}>Send</Button></>
  //   //     <><Button variant='outlined' startIcon={<Photo />}>Photo</Button></>
  //   //   </Stack>
  //   // </>
  // )

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<BackendLayout />} />
        </Route>

        <Route element={<BackendLayout />}>
          <Route path={DASHBOARD_PATH} element={<Dashboard />} />
          <Route path={PRODUCT_PATH} element={<Product />} />
          <Route path={REPORT_PATH} element={<Report />} />
          <Route path={SETTING_PATH} element={<Setting />} />
        </Route>


      </Routes>
    </BrowserRouter>
  )

}

export default App
