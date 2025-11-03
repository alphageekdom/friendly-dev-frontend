import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <>
      <section className='className="mx-auto px-6" my-8 max-w-6xl'>
        <Outlet />
      </section>
    </>
  );
};
export default MainLayout;
