import GoogleSign from "@/components/ui/googlebuttonsign";
import GoogleLogin from "@/components/ui/googlebuttonsign";

export default function SignUp() {
  return (
    <main className="flex flex-col items-center justify-top h-fit bg-[#08002e] pt-20 pb-20">
      <div className="flex flex-col items-center justify-center gap-2">
        <img src="/logo.svg" alt="cura logo" />
        <h1 className="text-[#ffff] font-nunito text-5xl font-extrabold flex flex-row gap-2 items-center justify-center">
          Welcome To
          <span className="text-[#360dbb] font-nunito text-5xl font-extrabold">
            CURA
          </span>
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <h2 className="text-[#fff] font-nunito text-3xl font-extrabold mt-15">
          Sign Up
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
            required
            placeholder="Confirm Password"
          />
        </div>

        <h1 className="text-[#ffff] font-nunito text-0.5 font-light flex flex-row gap-2 items-center justify-center">
          Have an account already?
          <a
            className="text-[#360dbb] font-nunito text-1 font-light underline"
            href="/auth/login"
          >
            Login
          </a>
        </h1>

        <button
          className="flex flex-row items-center justify-center gap-2 bg-[#3711b350] outline-none p-7 w-fit cursor-pointer m-auto h-5 rounded-lg text-[#fff] font-nunito text-1 font-light hover:bg-[#4006FF]"
          type="submit"
        >
          Sign Up
        </button>
        <p className="text-[#fff] font-nunito text-3 font-bold"> Or </p>
        <GoogleSign />
      </div>
    </main>
  );
}
