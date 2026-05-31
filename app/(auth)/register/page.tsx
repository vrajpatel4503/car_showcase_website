export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-6 border">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-black">
            Create Account
          </h1>
          <p className="text-gray-500 mt-2">
            Register to get started
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-5">

          {/* Name */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
            />
          </div>

          {/* Button */}
          <button
            type="button"
            className="w-full rounded-xl bg-black py-3 text-white font-medium hover:bg-gray-800"
          >
            Register
          </button>
        </form>
      </div>
    </main>
  );
}