import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const BaseLayout = lazy(() => import('../components/routes/layout/baseLayout'));
const NotFound = lazy(() => import('../pages/notFound/notFound'));
const Main = lazy(() => import('../pages/main/main'));
const SignIn = lazy(() => import('../pages/signIn/signIn'));
const SignUp = lazy(() => import('../pages/signUp/signUp'));
const Todo = lazy(() => import('../pages/todo/todo'));

const App = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <BaseLayout />,
            errorElement: <NotFound />,
            children: [
                {
                    path: '/',
                    element: <Main />,
                },
                {
                    path: '/signin',
                    element: <SignIn />,
                },
                {
                    path: '/signup',
                    element: <SignUp />,
                },
                {
                    path: '/tood',
                    element: <Todo />,
                },
            ],
        },
    ]);

    return (
        <div>
            <Suspense fallback="Loading result...⇡⇣">
                <RouterProvider router={router} />
            </Suspense>
        </div>
    );
};

export default App;
