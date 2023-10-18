'use client'

import React from 'react'
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from 'react-hot-toast'

type Props = {
  children: React.ReactNode
}

const Template = ({ children }: Props) => {
  return (
    <>
      <NextUIProvider>
        {children}
      </NextUIProvider>
      <Toaster />
    </>
  )
}

export default Template