import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/Routes'

ReactDOM.render(
	<ChakraProvider>
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	</ChakraProvider>,
	document.getElementById("root")
);
