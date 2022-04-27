import { Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const Rota1 = () => {
  const [count, setCount] = useState(1);

  return (
    <Flex color="#000" gap="1rem" direction="column">
      <Text>
        Add by one each click <strong>APP-3 PLACOM</strong>
      </Text>
      <Text>Your click count : {count} </Text>
      <Button onClick={() => setCount((prevState) => prevState * 8)}>
        aaaaaaaaaaa
      </Button>
    </Flex>
  );
};

export default Rota1;
