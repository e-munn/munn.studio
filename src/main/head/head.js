import { useEffect, useState, useContext, useRef } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { Button, Box, Stack } from '@mui/material'
import { DataStore } from 'aws-amplify'
import { motion } from 'framer-motion'
import { useTheme } from '@mui/material/styles'
import { Auth } from 'aws-amplify'
import { Foot } from './foot'
import { Logo } from './logo'
export const Head = ({ user }) => {
  const theme = useTheme()

  return (
    <>
      <header style={{ background: theme.palette.purple[0] }}>
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          style={{ height: '100%' }}
        >
          <Link to={'/'}>
            <motion.div className={'logo'} whileTap={{ scale: 0.95 }}>
              <Logo radius={12} />
            </motion.div>
          </Link>
        </Stack>
      </header>
      <Outlet />
      <Foot />
    </>
  )
}
