import React from 'react';

// redux
import { connect } from 'react-redux';

//styles
import styled from 'styled-components';
import device from '../styles/MediaQuery';

//components
import Layout from './Layout';
import Header from './Header';
import Create from './CreateMemo/Create';
import Memos from './Memos/Memos';

const MemoList = styled.article`
  width: 100%;
  margin: 0 auto;
  padding: 1rem;

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 1rem;
  row-gap: 1rem;

  ${device.tablet`
  grid-template-columns: repeat(3, 1fr);
  max-width: 768px;
`}
`;

const App = ({ memos }) => {
  return (
    <Layout>
      <Header />
      <Create />
      <MemoList>
        {memos.map((item) => (
          <Memos
            key={item.id}
            id={item.id}
            title={item.title}
            createdAt={item.createdAt}
            description={item.description}
          ></Memos>
        ))}
      </MemoList>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    memos: state.memoReducer.memos,
  };
};

export default connect(mapStateToProps)(App);
