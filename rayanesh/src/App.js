import React from "react";
import {createTheme, ThemeProvider} from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";
import {CacheProvider} from "@emotion/react";
import createCache from "@emotion/cache";
import {prefixer} from "stylis";
import AllRoutes from "./routes/AllRoutes";
import {ToastContainer} from "react-toastify";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import LoginContextProvider from "./context/LoginContextProvider";
import 'react-toastify/dist/ReactToastify.css';

const cacheRtl = createCache({
    key: "muirtl",
    // prefixer is the only stylis plugin by default, so when
    // overriding the plugins you need to include it explicitly
    // if you want to retain the auto-prefixing behavior.
    stylisPlugins: [prefixer, rtlPlugin]
});

const theme = createTheme({
    direction: 'rtl',
    typography: {
        fontFamily: [
            'Vazir'
        ].join(','),
    },
});

function App() {
    React.useLayoutEffect(() => {
        document.body.setAttribute("dir", "rtl");
    }, []);

    const queryClient = new QueryClient();
    return (
        <div className="App">
            <QueryClientProvider client={queryClient}>
                <CacheProvider value={cacheRtl}>
                    <ThemeProvider theme={theme}>
                        <LoginContextProvider>
                            <AllRoutes/>
                        </LoginContextProvider>
                        <ToastContainer/>
                    </ThemeProvider>
                </CacheProvider>
            </QueryClientProvider>
        </div>
    )
}

export default App;
