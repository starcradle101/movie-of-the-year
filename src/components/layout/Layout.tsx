import { Outlet } from "react-router";

export const Layout = (): JSX.Element => {
  return (
    <div className='min-h-screen bg-[#121212]'>
      <div className='mx-auto max-w-2xl text-4xl text-white'>
        <Outlet />
      </div>
    </div>
  );
};
