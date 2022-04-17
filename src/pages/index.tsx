import React, { useState } from 'react'
import { Flex, Button, Avatar, useBreakpointValue } from '@chakra-ui/react'
import router from 'next/router';

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import { TrailEffect } from '../helpers/TrailEffect'
import { TrailEffectPhoto } from '../helpers/TrailEffectPhoto'

export default function SignIn() {
  const [open, set] = useState(true)

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
})

  return (
    <Flex w="100vw" h="100vh" direction="column" onClick={() => set(state => !state)}>
      <Parallax pages={2} style={{ top: '0', left: '0' }}>
        <ParallaxLayer
          offset={0}
          speed={1}
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

          <Flex flexDirection="row" align="center">
            <TrailEffect open={open}>
              <span style={{ fontSize: '75px', color: '#dfdfdf', alignSelf: 'center' }}>Eduardo</span>
              <span style={{ fontSize: '70px', color: '#a3a3a3', alignSelf: 'center' }}>Sohne</span>
              <span style={{ fontSize: '65px', letterSpacing: '4px', color: '#883933' }}>SOFTWARE</span>
              <span style={{ fontSize: '78px', letterSpacing: '1px', color: '#883933' }}>ENGINEER</span>
            </TrailEffect>
            <TrailEffectPhoto open={open}>
              {
                isWideVersion ?
                  <Avatar size="200px" name="Eduardo Sohne" src="https://avatars.githubusercontent.com/u/19408694?v=4" />
                  : ''
              }
            </TrailEffectPhoto>
          </Flex>

          <Flex>
            {open ?
              <span style={{ fontSize: '22px', color: '#fdba6d', letterSpacing: '6px', marginTop: '10rem' }}>click anywhere</span>
              : ''
            }
          </Flex>

        </ParallaxLayer>

        <Flex flexDirection="column" align="center" justify="center" mt="300">
          <TrailEffect open={!open}>
            <span style={{ fontSize: '90px', color: '#dfdfdf' }}>scroll</span>
            <span style={{ fontSize: '90px', color: '#a3a3a3' }}>down</span>
            <span style={{ fontSize: '60px', letterSpacing: '4px', color: '#883933' }}>to</span>
            <span style={{ fontSize: '60px', letterSpacing: '4px', color: '#883933' }}>access</span>
          </TrailEffect>
        </Flex>

        <ParallaxLayer offset={0.9} speed={3} style={{ backgroundColor: '#ffffff' }} />
        <ParallaxLayer offset={1.1} speed={4} style={{ backgroundColor: '#f3ba65' }} />

        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}>
          <Flex direction="column">
            <Button type="button" mt="4" fontWeight="bold" bgColor="black" color="white" size="lg" onClick={() => router.push(`/home`)} _hover={{ background: 'red' }}>ACCESS</Button>
          </Flex>
        </ParallaxLayer>
      </Parallax>
    </Flex >
  )
}
