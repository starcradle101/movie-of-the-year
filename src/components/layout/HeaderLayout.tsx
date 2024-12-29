import { Outlet } from "react-router";
import { Header } from "../common/Header";

export const HeaderLayout = (): JSX.Element => {
  return (
    <div className='min-h-screen bg-[#121212]'>
      <div className='mx-auto max-w-2xl px-4 text-white'>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};
