import { Outlet } from "react-router";

export const BaseLayout = (): JSX.Element => {
  return (
    <div className='min-h-screen bg-[#121212]'>
      <div className='mx-auto max-w-2xl px-4 text-white'>
        <Outlet />
      </div>
    </div>
  );
};
