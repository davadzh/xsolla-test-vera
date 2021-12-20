// @ts-ignore
import {ContentBlock} from 'xsolla-uikit';
import {IntlProvider} from "react-intl";
import {Header} from "./components/CustomUI/Header";
import {Layout} from "./components/CustomUI/Layout";
import styled from "styled-components";
import {Content} from "./components/Content";

const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const App = () => {
  return (
    <AppStyled>
      <IntlProvider locale={'ru'}>
        <Header/>

        <Layout>
          <ContentBlock>
            <Content />
          </ContentBlock>
        </Layout>
      </IntlProvider>
    </AppStyled>
  );
}
