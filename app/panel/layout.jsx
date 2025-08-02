export default function Layout({ children }) {
  return (
    <>
      <div className="">
        <div>sidebar</div>
        <div />
        <main className="flex flex-col w-full ">
          <div className="flex w-full"></div>
          {children}
        </main>
      </div>
    </>
  );
}
