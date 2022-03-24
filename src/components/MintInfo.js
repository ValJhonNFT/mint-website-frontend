
import {Box, Button, Flex, Image, Link, Spacer, Text} from '@chakra-ui/react';
import Facebook from "../assets/social-media-icons/facebook.png";


const MintInfo = () => {
  return (
    <Flex backgroundColor="#117ACA" >
    <div>
    <Flex>
      <Link href="https://www.facebook.com/">
        <Image src={Facebook} boxSize="300px"  marginLeft="150px" />
      </Link>
      <Text
        fontSize="35px"
        letterSpacing="-5.5%"
        fontFamily="Quicksand"
        textShadow="0 2px 2px #000000"
        color="white"
      > The Vault Card</Text>
      <Text
       flexWrap
        fontSize="20px"
        letterSpacing="-5.5%"
        fontFamily="Quicksand"
        textShadow="0 2px 2px #000000"
        color="white"
        textAlign="right"
      > WITH A LIMITED SUPPLY OF 10,000 NFTS, THE HEXGO WILL GIVE EXCLUSIVE ACCESS TO EVERYTHING IN THE DIGITAL SPACE.</Text>
      </Flex>

      </div>
    </Flex>

  )

}
export default MintInfo
