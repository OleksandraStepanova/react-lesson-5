import { Header } from 'components';
import { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getBasedCurrency } from 'reduxState/currency/operations';
import { setDefaultCurrency } from 'reduxState/currency/slice';

const Home = lazy(() => import('./pages/Home'));
const Rates = lazy(()=>import('./pages/Rates'))

export const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

const success = async(pos) => {
  const crd = pos.coords;
  dispatch(getBasedCurrency(crd));  
}

    function error(err) {
      dispatch(setDefaultCurrency('USD'));
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

    navigator.geolocation.getCurrentPosition(success, error, options);
    
  }, [dispatch])
  
  return (<Header>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/rates' element={<Rates />} />
      <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>
  </Header>
  )
};
