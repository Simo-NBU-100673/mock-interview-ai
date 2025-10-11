"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"

import {Button} from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import Image from "next/image";
import Link from "next/link";
import {toast} from "sonner";
import FormField from "@/components/FormField";

const authFormSchema = (type: FormType) => {
    return z.object({
        name: type === 'sign-up' ? z.string().min(3) : z.string().optional(),
        email: z.email(),
        password: z.string().min(6),
    })
}

const AuthForm = ({type}: {type: FormType}) => {

    const formSchema = authFormSchema(type);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            if (type === "sign-up") {
                console.log('Sign up',values)
            }else {
                console.log('Sign in', values)
            }
        }catch (e) {
            console.error(e);
            toast.error(`There was an error: ${e}`)
        }
    }

    const isSignInPage = type === 'sign-in'

    return (
        <div className="card-border lg:min-w-[566px]">
            <div className="flex flex-col gap-6 card py-14 px-10">
                <div className="flex flex-row gap-2 justify-center">
                    <Image src={"/logo.svg"} alt={"logo"} height={32} width={38}/>
                    <h2 className={"text-primary-100"}>PrepWise</h2>
                </div>

                <h3>Practice job interview with AI</h3>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full mt-4 form">
                        {!isSignInPage && (
                            <FormField
                            control={form.control}
                            name="name"
                            label="Name"
                            placeholder="Your Name"/>
                        )}
                        <FormField
                            control={form.control}
                            name="email"
                            label="Email"
                            placeholder="Your Email Adress"
                            type="email"/>
                        <FormField
                            control={form.control}
                            name="password"
                            label="Password"
                            placeholder="Enter your password"
                            type="password"/>
                        <Button className={"btn"} type="submit">
                            {isSignInPage ? 'Sign in' : "Create an Account"}
                        </Button>
                    </form>
                </Form>

                <p className="text-center">
                    {isSignInPage ? 'No account yet?' : 'Hava an account already?'}
                    <Link href={!isSignInPage ? '/sign-in' : '/sign-up'}
                          className="font-bold text-user-primary ml-1">
                        {!isSignInPage ? 'Sign-in' : 'Sign-up'}
                    </Link>
                </p>
            </div>
        </div>
    )
}
export default AuthForm
