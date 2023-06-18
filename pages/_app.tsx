import Layout from "@/components/Layout";
import { wrapper } from "@/redux/store";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, ...rest }: AppProps) {
  const { store } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...rest.pageProps} />
      </Layout>
    </Provider>
  );
}
