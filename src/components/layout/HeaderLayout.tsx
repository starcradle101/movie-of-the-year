import { Outlet } from "react-router";
import { Header } from "../common/Header";

export const HeaderLayout = (): JSX.Element => {
  return (
    <div className='mx-auto h-dvh max-w-2xl bg-[#121212] px-4 text-white'>
      <Header />
      <Outlet />
    </div>
  );
};
