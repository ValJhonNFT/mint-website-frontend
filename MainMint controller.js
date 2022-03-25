<Flex align="center" justify="center">
  <Button
    backgroundColor="#117ACA"


    color="white"
    cursor="pointer"
    fontFamily="Teko-Bold"
    padding="15px"
    marginRight="5px"
    marginTop="10px"
    onClick={handleDecrement}>
    -
    </Button>

    <Input
     readOnly
     fontFamily="Teko-Bold"
     width="100px"
     height="40px"
     textAlign="center"
     paddingLeft="19px"
     marginTop="10px"
     type="number"
     value={mintAmount}
     />

  <Button
      backgroundColor="#117ACA"

      boxShadow="0px 2px 2px 1px #0F0F0F"
      color="white"
      cursor="pointer"
      fontFamily="Teko-Bold"
      marginLeft="5px"
      padding="15px"
      marginTop="10px"
      onClick={handleIncrement}>
      +
      </Button>

  </Flex>
