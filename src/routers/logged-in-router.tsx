import { isLoggedInVar } from "../apollo";

export const LoggedInRouter = () => {
  const onClick = () => {
    isLoggedInVar(false);
  };

  return (
    <div>
      <h1>Logged In</h1>
      <div className="flex items-center justify-center w-full mt-10">
        <button
          onClick={onClick}
          className="p-5 border-2 bg-yellow-300 text-red-800 hover:shadow-lg hover:opacity-70"
        >
          Click to logOut
        </button>
      </div>
    </div>
  );
};
