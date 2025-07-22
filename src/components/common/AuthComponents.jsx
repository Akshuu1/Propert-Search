import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import {
    IconBrandGithub,
    IconBrandGoogle,
} from "@tabler/icons-react";

export function SignUp({ switchToSignIn }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
    };
    return (
        <div className="h-[100vh] flex items-center justify-center">
            <div
                className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black border dark:border-zinc-900 border-zinc-100">
                <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
                    Welcome to Domora
                </h2>
                <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
                    Join the crew and unlock exclusive features to level up your experience.
                </p>
                <form className="my-8" onSubmit={handleSubmit}>
                    <div
                        className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                        <LabelInputContainer>
                            <Label htmlFor="firstname">First name</Label>
                            <Input id="firstname" placeholder="Tyler" type="text" />
                        </LabelInputContainer>
                        <LabelInputContainer>
                            <Label htmlFor="lastname">Last name</Label>
                            <Input id="lastname" placeholder="Durden" type="text" />
                        </LabelInputContainer>
                    </div>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
                    </LabelInputContainer>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" placeholder="••••••••" type="password" />
                    </LabelInputContainer>

                    <button
                        className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] cursor-pointer"
                        type="submit">
                        Sign up &rarr;
                        <BottomGradient />
                    </button>

                    <div
                        className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

                    <div className="flex flex-col space-y-4">
                        <button
                            className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626] cursor-pointer"
                            type="submit">
                            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                            <span className="text-sm text-neutral-700 dark:text-neutral-300">
                                Continue with GitHub
                            </span>
                            <BottomGradient />
                        </button>
                        <button
                            className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626] cursor-pointer"
                            type="submit">
                            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                            <span className="text-sm text-neutral-700 dark:text-neutral-300">
                                Continue with Google
                            </span>
                            <BottomGradient />
                        </button>
                    </div>

                    <p className="text-center mt-10 text-sm ">
                        Already a member?{" "}
                        <button onClick={switchToSignIn} className="underline cursor-pointer">
                            Sign in
                        </button>
                    </p>
                </form>
            </div>
        </div>
    );
}

export function SignIn({ switchToSignUp }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
    };
    return (
        <div className="h-[100vh] flex items-center justify-center">
            <div
                className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black border dark:border-zinc-900 border-zinc-100">
                <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
                    Welcome back to Domora
                </h2>
                <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
                    Welcome back! Let’s get you back in and keep the good vibes rolling.
                </p>
                <form className="my-8" onSubmit={handleSubmit}>
                    <div
                        className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                    </div>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
                    </LabelInputContainer>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" placeholder="••••••••" type="password" />
                    </LabelInputContainer>

                    <button
                        className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] cursor-pointer"
                        type="submit">
                        Sign in &rarr;
                        <BottomGradient />
                    </button>

                    <div
                        className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

                    <div className="flex flex-col space-y-4">
                        <button
                            className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626] cursor-pointer"
                            type="submit">
                            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                            <span className="text-sm text-neutral-700 dark:text-neutral-300">
                                Continue with GitHub
                            </span>
                            <BottomGradient />
                        </button>
                        <button
                            className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626] cursor-pointer"
                            type="submit">
                            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                            <span className="text-sm text-neutral-700 dark:text-neutral-300">
                                Continue with Google
                            </span>
                            <BottomGradient />
                        </button>
                    </div>

                    <p className="text-center mt-10 text-sm ">
                        First time here?{" "}
                        <button onClick={switchToSignUp} className="underline cursor-pointer">
                            Sign up
                        </button>
                    </p>
                </form>
            </div>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span
                className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
            <span
                className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className
}) => {
    return (
        <div className={cn("flex w-full flex-col space-y-2", className)}>
            {children}
        </div>
    );
};