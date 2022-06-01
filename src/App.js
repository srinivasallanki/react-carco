import CircularProgress from '@mui/material/CircularProgress'
import Button from '@mui/material/Button'

import React, { Suspense, useState } from 'react'

const CustomSpeedDial = React.lazy(() => import('./CustomSpeedDial'))

function App() {
  // 2
  const [showSpeedDial, setShowSpeedDial] = useState(false)

  // 4
  if (showSpeedDial) {
    return (
      // 5
      <Suspense fallback={<CircularProgress />}>
        <CustomSpeedDial />
      </Suspense>
    )
  }

  return (
    // 3
    <Button variant='contained' onClick={() => setShowSpeedDial(true)}>
      Click to load speed dial
    </Button>
  )
}

export default App
