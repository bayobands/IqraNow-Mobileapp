"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { usePracticeModal } from "@/app/store/use-practice-modal"; 

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const PracticeModal = () => {
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);
    const { isOpen, close } = usePracticeModal();

    useEffect(() => setIsClient(true), []);

const onClick = () => {
    close();
    router.push("/store");
}; 

    if (!isClient) {
        return null;
    }

    return (
        <Dialog open={isOpen} onOpenChange={close}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <div className="flex items-center w-full justify-center mb-5">
                        <Image
                        src="https://res.cloudinary.com/dkahuuvrf/image/upload/v1754542949/practice_wcjgfh.png"
                        alt="Mascot"
                        height={150}
                        width={150}
                        />
                    </div>
                    <DialogTitle className="text-center font-bold text-2xl">
                        Practice Lesson
                    </DialogTitle>
                    <DialogDescription className="text-center text-base">
                        Use Practice Lesson to regain Hearts and points.
                    </DialogDescription>
                    <DialogFooter className="mb-4">
                        <div className="flex flex-col gap-y-4 w-full">
                            <Button variant="primary" 
                            className="w-full" 
                            size="lg"
                            onClick={close}>
                                Lets go!
                            </Button>
                        </div>
                    </DialogFooter>
                </DialogHeader>
            </DialogContent>

        </Dialog>
    )
};