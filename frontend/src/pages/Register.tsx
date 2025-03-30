

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {useAuth} from "../hooks/useAuth"
import Button from "../components/Button";
import Input from "../components/Input";
import { Link } from "react-router-dom";

// Validation Schema
const schema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData  = z.infer<typeof schema>

const Register = () => {

  const { registerMutation} = useAuth();
  const {register, formState: {errors, isSubmitting}, handleSubmit } = useForm<FormData>({
    defaultValues : {
      email : "",
      password : ""
    },
    resolver: zodResolver(schema)
  })

  const onSubmit:SubmitHandler<FormData> = async (data) => {
    registerMutation.mutate(data);
  }


  return (
    <div className="h-screen flex justify-center items-center">
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4 p-4 border rounded-md w-96">
    <h1 className="text-center text-3xl font-semibold">Sign Up</h1>
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      <Input type="text" register={register} name="email" placeholder="UID"></Input>
      
      {errors.password && <p className="text-red-500">{errors.password.message}</p>}

      <Input type="password" register={register} name="password" placeholder="Password" />

      
      <Button type="submit" disabled={isSubmitting}>Register</Button>
      <div className="flex justify-center text-blue-900 hover:underline"><Link to={{pathname: "/login"}}>Sign In?</Link></div>
    </form>
    </div>
  );
};

export default Register;
