import logo from "@/assets/logo-green.png";
import { LoginForm } from "@/components/login-form";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: LoginPage,
});

function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="" className="mx-auto" height={96} width={96} />
          <h2 className="mt-4 text-2xl font-bold">Welcome Back!</h2>
          <h6>Sign In to Agri Connect!</h6>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
