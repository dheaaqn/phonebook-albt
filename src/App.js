import './App.css';
import 'antd/dist/antd.min.css';
import Contacts from './modules/contacts';
import DetailContact from './modules/detail_contacts';
import { Layout } from 'antd';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const { Content, Header, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Header style={{backgroundColor: '#1890ff', color: '#fff'}}>
            <div>Phone Book</div>
          </Header>
          <Content style={{padding: '5%'}}>
            <Routes>
              <Route path='/' element={<Contacts/>}/>
              <Route path='/detail/:id' element={<DetailContact/>} />
            </Routes>
          </Content>
          <Footer style={{textAlign: 'center'}}>Phone Book ©2022 Created Using React</Footer>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
