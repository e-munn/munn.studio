import { useEffect, useState, useContext, useRef } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { Avatar, Box, Stack } from '@mui/material'
import { DataStore } from 'aws-amplify'
import { motion } from 'framer-motion'
import { useTheme } from '@mui/material/styles'

export const Foot = ({}) => {
  const theme = useTheme()

  return (
    <>
      <footer style={{ background: theme.palette.purple[0] }}>
        <motion.div
          className="logos"
          style={{ background: theme.palette.purple[0] }}
        ></motion.div>
      </footer>
    </>
  )
}
