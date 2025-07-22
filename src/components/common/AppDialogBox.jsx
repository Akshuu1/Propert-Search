import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { InlineWidget } from "react-calendly"

export function AppDialogBox() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Book a call</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-lg md:text-1xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-5 mt-3">
                        Book your call on{" "}
                        <span
                            className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                            Calendly
                        </span>{" "}
                        now
                    </DialogTitle>
                    <DialogDescription>
                        <InlineWidget url="https://calendly.com/shutuphardy/30min" />
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="sm:justify-start">
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
