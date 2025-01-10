export default function Error() {
  return (
    <div className=" flex justify-center align-middle flex-col m-auto w-full h-[100vh] bg-teal-700">
      <h1 className=" text-center text-4xl mb-2 text-zinc-300">
        404 - Page Not Found
      </h1>
      <p className="text-center text-xl text-zinc-300">
        Sorry, the path you are trying to access does not exist.
      </p>
    </div>
  );
}
