import { useForm } from "react-hook-form";

export const LoggedOutRouter = () => {
  const { formState, handleSubmit, register, watch, getValues } = useForm();

  const onSubmit = () => {
    console.log(getValues());
  };

  const onInvalid = () => {
    console.log("can not do that");
  };
  console.log(formState.errors);

  return (
    <div>
      <h1>Logged Out</h1>
      <div className="mt-10 mx-10">
        <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
          <div>
            <input
              {...register("email", {
                required: "This is required",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "이메일 주소 형식에 맞지 않습니다",
                },
              })}
              name="email"
              type="email"
              required
              placeholder="E-mail"
            />
            <input
              {...register("password")}
              name="password"
              type="password"
              required
              placeholder="Password"
            />
          </div>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};
