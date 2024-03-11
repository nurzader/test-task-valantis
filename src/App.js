import {Routes, Route} from 'react-router-dom';
import Layout from './components/layout/Layout';
import {HomePage, ProductsPage, InnerProductPage} from './pages';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="products" element={<ProductsPage />} />
                <Route path="products/:id" element={<InnerProductPage />} />
            </Route>
        </Routes>
    );
}

export default App;
