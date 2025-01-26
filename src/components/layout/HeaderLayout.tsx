import { Outlet } from "react-router";
import { Header } from "../common/Header";

export const HeaderLayout = (): JSX.Element => {
  return (
    <main className='mx-auto flex h-dvh max-w-2xl flex-col px-4 text-white'>
      <Header />
      <Outlet />
    </main>
  );
};
