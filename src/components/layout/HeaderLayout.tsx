import { Outlet } from "react-router";
import { Header } from "../common/Header";

export const HeaderLayout = (): JSX.Element => {
  return (
    <main className='mx-auto flex h-dvh max-w-2xl flex-col bg-[#121212] px-4 text-white'>
      <Header />
      <section className='flex-1'>
        <Outlet />
      </section>
    </main>
  );
};
