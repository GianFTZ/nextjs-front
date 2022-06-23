import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'

interface NavbarProps {
    key1?: string;
    key1content?: string;
    key1button?: string;
    key1buttoncolor?: string;
    key2?: string;
    key2content?: string;
    key2button?: string;
    key2buttoncolor?: string;
    key3?: string;
    key3content?: string;
    key3button?: string;
    key3buttoncolor?: string;
    key4?: string;
    key4content?: string;
    key4button?: string;
    key4buttoncolor?: string;
}

const Navbar = (props: NavbarProps) => {
    function handleClick() {
        return alert("você fez um post!")
    }
    function handleClick2() {
        return alert("você fez um get")
    }
  return (
        <Tabs variant='soft-rounded'>
            <TabList>
                <Tab>{props.key1}</Tab>
                <Tab>{props.key2}</Tab>
                <Tab>{props.key3}</Tab>
                <Tab>{props.key4}</Tab>
            </TabList>
        <TabPanels>
            <TabPanel>          {/* key1 */}
                <p>{props.key1content}</p>
                <Button colorScheme={props.key1buttoncolor} onClick={handleClick}>{props.key1button}</Button>
            </TabPanel>         
            <TabPanel>          {/* key2 */}
                <p>{props.key2content}</p>
                <Button colorScheme={props.key2buttoncolor} onClick={handleClick2}>{props.key2button}</Button>
            </TabPanel>         
            <TabPanel>          {/* key3 */}
                <p>{props.key3content}</p>
            </TabPanel>         
            <TabPanel>          {/* key4 */}
                <p>{props.key4content}</p>
            </TabPanel>   
        </TabPanels>
        </Tabs>
  )
}

export default Navbar
