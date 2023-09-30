import React, { useState } from "react";
import ReactTypingSpeedTest from "@skpts/react-typing-speed-test/dist";
import {
  Button,
  Flex,
  Heading,
} from "@chakra-ui/react";

import { passage } from "./assests/paragragh";

function App() {
  const [startTest, setstartTest] = useState(false);
  return (
    <>
      <ReactTypingSpeedTest
        color="dark"
        testContent={passage[0].content}
        onFinish={(e) => {
          console.log(e);
        }}
        duration={120}
        showResult={true}
        startTest={startTest}
      ></ReactTypingSpeedTest>

     {!startTest && <Flex
        alignItems="center"
        direction="column"
        height="full"
        gap={10}
        marginTop="48"
      >
        <Heading>Typing Speed Test</Heading>

        {!startTest && (
          <Button
            colorScheme="green"
            size="lg"
            onClick={() => setstartTest(true)}
          >
            Start
          </Button>
        )}
      </Flex>
}
    </>
  );
}

export default App;
