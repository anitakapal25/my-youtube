import { Provider } from 'react-redux';
import './App.css';
import { Body } from './components/Body';
import Head from './components/Head';
import store from './components/utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { MainContainer } from './components/MainContainer';
import { WatchPage } from './components/WatchPage';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
    children:[
      {
        path:"/",
        element: <MainContainer/>
      },
      {
        path:"watch",
        element: <WatchPage/>
      }
    ]
  }
])
function App() {
  return (
    //wrap my app inside provider
    <Provider store={store}>
      <div>
        <Head/>
        <RouterProvider router={appRouter} />
        {/**
         * 
         *  Head
            Body
              Sidebar
                MenuItems
              MainContainer
              ButtonsList
              VideoContainer
                VideoCard
        */        
        }
      </div>
    </Provider>
    
  );
}

export default App;
