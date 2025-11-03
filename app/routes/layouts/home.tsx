import { Outlet } from 'react-router';
import Hero from '~/components/Hero';

const HomeLayout = () => {
  return (
    <>
      <Hero name="Luis" />
      <section className='className="mx-auto px-6" my-8 max-w-6xl'>
        <Outlet />
      </section>
    </>
  );
};
export default HomeLayout;
