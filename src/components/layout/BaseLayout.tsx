import { Outlet } from "react-router";

export const BaseLayout = (): JSX.Element => {
  return (
    <main className='mx-auto h-dvh max-w-2xl bg-[#121212] px-4 text-white'>
      <Outlet />
    </main>
  );
};
