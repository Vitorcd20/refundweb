import { useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { z, ZodError } from "zod";
import { api } from "../services/api";
import { useNavigate } from "react-router";

const signUpSchema = z
  .object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Email invalid" }),
    password: z.string().min(6, { message: "At least 6 characters" }),
    passwordConfirm: z.string({ message: "Confirm your password" }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Both password needs to be equal",
    path: ["passwordConfirm"],
  });

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      setIsLoading(true);

      const data = signUpSchema.parse({
        name,
        email,
        password,
        passwordConfirm,
      });

      await api.post("/users", data);
      if (confirm("Registered successfully. Go to the login page?")) {
        navigate("/");
      }
    } catch (error) {
      if (error instanceof ZodError) {
        return alert(error.issues[0].message);
      }

      alert("Failed to register");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
      <Input
        required
        legend="Name"
        placeholder="Your name"
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        required
        legend="E-mail"
        type="email"
        placeholder="youremail@email.com"
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        required
        legend="Password"
        type="password"
        placeholder="123456"
        onChange={(e) => setPassword(e.target.value)}
      />

      <Input
        required
        legend="Confirm password"
        type="password"
        placeholder="123456"
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />

      <Button type="submit" isLoading={isLoading}>
        Sign Up
      </Button>

      <a
        href="/"
        className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear"
      >
        Already have an account
      </a>
    </form>
  );
}
