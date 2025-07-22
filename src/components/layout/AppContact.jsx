"use client"

import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { TextArea } from '../ui/Textarea';
import { cn } from '@/lib/utils';

const AppContact = () => {
    return (
        <section className="relative text-gray-600 body-font mt-20">
            <div className="container mx-auto flex flex-wrap px-5 py-24 sm:flex-nowrap">
                <div className="relative flex items-end justify-start overflow-hidden rounded-lg bg-gray-900 p-10 sm:mr-10 lg:w-2/3 md:w-1/2">
                    <iframe
                        width="100%"
                        height="100%"
                        className="absolute inset-0"
                        frameBorder="0"
                        title="map"
                        marginHeight="0"
                        marginWidth="0"
                        scrolling="no"
                        src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Kolkata+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                        style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
                    ></iframe>
                    <div className="relative flex flex-wrap rounded shadow-md bg-white dark:bg-zinc-950 py-6">
                        <div className="px-6 lg:w-1/2">
                            <h2 className="text-xs font-semibold tracking-widest text-gray-900 dark:text-gray-100 title-font">ADDRESS</h2>
                            <p className="mt-1 dark:text-gray-500">Downtown street, Block-9, Kolkata - 700001</p>
                        </div>
                        <div className="px-6 mt-4 lg:mt-0 lg:w-1/2">
                            <h2 className="text-xs font-semibold tracking-widest text-gray-900 dark:text-gray-100 title-font">EMAIL</h2>
                            <a className="leading-relaxed dark:text-gray-300">example@email.com</a>
                            <h2 className="mt-4 text-xs font-semibold tracking-widest text-gray-900 dark:text-gray-100 title-font">PHONE</h2>
                            <p className="leading-relaxed dark:text-gray-500">123-456-7890</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full mt-8 bg-transparent rounded md:ml-auto md:py-8 md:mt-0 lg:w-1/3 md:w-1/2">
                    <h2 className="mb-1 text-3xl font-semibold text-gray-900 dark:text-gray-100 title-font">Get in touch</h2>
                    <p className="mb-5 leading-relaxed text-gray-600 dark:text-gray-500">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                    <div className="relative mb-4">
                        <LabelInputContainer>
                            <Label htmlFor="fullname">Full name</Label>
                            <Input id="fullname" placeholder="John Doe" type="text" />
                        </LabelInputContainer>
                    </div>
                    <div className="relative mb-4">
                        <LabelInputContainer>
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" placeholder="example@email.com" type="email" />
                        </LabelInputContainer>
                    </div>
                    <div className="relative mb-4">
                        <LabelInputContainer>
                            <Label htmlFor="message">Message</Label>
                            <TextArea id="message"
                                name="message"
                                placeholder='Enter your message here' />
                        </LabelInputContainer>
                    </div>
                    <button className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626] cursor-pointer" type="submit" onClick={() => { console.log("Contact form submitted") }}>
                        <span className="text-sm text-neutral-700 dark:text-neutral-300">
                            Submit
                        </span>
                    </button>
                </div>
            </div>
        </section>
    )
}

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

export default AppContact