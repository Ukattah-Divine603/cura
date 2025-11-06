import GoogleLogin from "@/components/ui/googlebuttonlogin";

export default function Login() {
  return (
    <main className="flex flex-col items-center justify-top h-fit bg-[#08002e] pt-20 pb-20">
      <div className="flex flex-col items-center justify-center gap-2">
        <img src="/logo.svg" alt="cura logo" />
        <h1 className="text-white font-nunito text-5xl font-extrabold flex flex-row gap-2 items-center justify-center">
          Welcome Back To
          <span className="text-[#360dbb] font-nunito text-5xl font-extrabold">
            CURA
          </span>
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <h2 className="text-white font-nunito text-3xl font-extrabold mt-15">
          Login
        </h2>
        <div className="flex flex-col items-left justify-center gap-2 bg-[#3711b350] border-3 border-[#4006FF] p-7 w-[768px] rounded-lg">
          <input
            className="items-left justify-center gap-2 bg-[#3711b350] outline-none p-7 w-full h-5 rounded-lg text-[#fff] font-nunito text-1 font-light"
            type="text"
            placeholder="Name"
          />
          <input
            className="items-left justify-center gap-2 bg-[#3711b350] outline-none p-7 w-full h-5 rounded-lg text-[#fff] font-nunito text-1 font-light"
            type="email"
            placeholder="Email"
          />
          <input
            className="items-left justify-center gap-2 bg-[#3711b350] outline-none p-7 w-full h-5 rounded-lg text-[#fff] font-nunito text-1 font-light"
            type="password"
            placeholder="Password"
          />
          <input
            className="items-left justify-center gap-2 bg-[#3711b350] outline-none p-7 w-full h-5 rounded-lg text-[#fff] font-nunito text-1 font-light"
            type="password"
            placeholder="Confirm Password"
          />
        </div>

        <h1 className="text-white font-nunito text-0.5 font-light flex flex-row gap-2 items-center justify-center">
          Don't have an account?
          <a
            className="text-[#360dbb] font-nunito text-1 font-light underline"
            href="/auth/signup"
          >
            Sign Up
          </a>
        </h1>

        <button
          className="flex flex-row items-center justify-center gap-2 bg-[#3711b350] outline-none p-7 w-fit cursor-pointer m-auto h-5 rounded-lg text-[#fff] font-nunito text-1 font-light"
          type="submit"
        >
          Login
        </button>
        <p className="text-white font-nunito text-3 font-bold"> Or </p>
        <GoogleLogin />
      </div>
    </main>
  );
}
