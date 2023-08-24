// Router : 패킷이 전송될 경로를 지정하는 장비 
// Routing : 패킷이 전송될 경로 
// Route   : 패킷이 가야할 경로를 설정 

// page-route : 요청에 대한 컴포너트를 호출 (컴포넌트가 하나의 페이지)
    // npm i react-router-dom          //설치가 필요 
    // 라이팅 처리하는 라이브러리 import

import { Routes , Route, Link} from 'react-router-dom'; 

import Home from './component/Home';
import About from './component/About';
import Gallery from './component/Gallery';
import Company from './component/Company';

// 라이팅 되는 페이지 생성 : 요청이 있을때 컴포넌트 페이지 

function App() {
  return (
  <>
      <nav>
        <ul>
          <li> 
            <Link to = "/"> Home </Link>
          </li>
          <li> 
            <Link to = "/about"> about </Link>
          </li>
          <li> 
            <Link to = "/gallery"> gallery </Link>
          </li>
          <li>
            <a href="/company"> company </a>
          </li>
        </ul>
      </nav>

      <Routes>
          <Route path = "/" element = {<Home />}> </Route>
          <Route path = "/about" element = {<About />}> </Route>
          <Route path = "/gallery" element = {<Gallery />}> </Route>
          <Route path = "/company" element = {<Company />}> </Route>
      </Routes>

  </>

  );
}

export default App;
