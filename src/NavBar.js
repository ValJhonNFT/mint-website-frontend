import React from 'react';
import {Box, Button, Flex, Image, Link, Spacer} from '@chakra-ui/react';
import HexGoLogo from "./assets/hexgologo.png";
import Facebook from "./assets/social-media-icons/facebook.png";
import Twitter from "./assets/social-media-icons/twitter.png";
import Discord from "./assets/social-media-icons/discord.png";
import { Markup } from 'interweave';

const NavBar = ({ accounts, setAccounts}) => {
  const isConnected = Boolean(accounts[0]);

  async function connectAccount() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
      console.log(accounts);

      // you can use substring, slice, substr
    }

  }

  const myaccount = accounts.toString();




return (
  <div className="navbar-overlay">

    <Flex justify="space-between" align="center" height="80px">
  {/* Left Side - Social Media Icons */}
      <Flex justify="space-around" width="40%" padding="0 75px">
        <Link href="">
        <Image src={HexGoLogo} boxSize="42px" margin="25px 15px" height="30px" width="110px"/>
        </Link>
        <Link href="https://www.facebook.com/">
          <Image src={Facebook} boxSize="42px" margin="20px 15px" />
        </Link>
        <Link href="https://www.twitter.com/">
          <Image src={Twitter} boxSize="42px" margin="20px 15px" />
        </Link>
        <Link href="https://www.discord.com/">
          <Image src={Discord} boxSize="42px" margin="20px 15px" />
        </Link>
    </Flex>

  {/* Right Side - Sections and Connect */}

<Flex
  justify="space-between"
  align="center"
  width="40%"
  padding="30px 30px 30px 30px"
  >

<Box margin="0 15px">About</Box>
<Spacer />
<Box margin="0 15px">Mint</Box>
<Spacer />
<Box margin="0 15px">Team</Box>
<Spacer />
{/* Connected Button*/}
{isConnected ? ( //0x5d77b4d61650004a8d0170c79cf1052411a148c8
  <Box backgroundColor="#117ACA" className="button" fontFamily="Quicksand"><Markup content={myaccount.substring(0, 6)} />{'_'}<Markup content={myaccount.slice(38)} /></Box>
) : (
  <Button
  className="button"
  fontFamily="inherit"
  boxShadow="0px 2px 2px 1px #117ACA"
  cursor="pointer"
  fontFamily="inherit"

  onClick={connectAccount}

  >Connect</Button>
)}
  </Flex>
  </Flex>

  </div>

);
};

export default NavBar;
