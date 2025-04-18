import LoginForm from "../components/LoginForm";
import LoginHeader from "../components/LoginHeader";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
        <LoginHeader />
        <LoginForm />
      </div>
    </div>
  );
}
