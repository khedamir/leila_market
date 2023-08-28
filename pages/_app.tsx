import Layout from "@/components/Layout";
import { fetchCatalogData } from "@/redux/catalog/asyncAction";
import { fetchMenu } from "@/redux/menu/asyncAction";
import { fetchProducts } from "@/redux/products/asyncAction";
import { wrapper } from "@/redux/store";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";

function App({ Component, ...rest }: AppProps) {
  const { store } = wrapper.useWrappedStore(rest);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...rest.pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

App.getInitialProps = wrapper.getInitialAppProps(
  (store) =>
    async ({ Component, ctx }) => {
      await store.dispatch(fetchMenu());
      const pageProps = Component.getInitialProps
        ? await Component.getInitialProps({ ...ctx, store })
        : {};
      return { pageProps };
    }
);

export default App;
