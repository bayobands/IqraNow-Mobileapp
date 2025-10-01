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
import { useExitModal } from "@/app/store/use-exit-modal"; 

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const ExitModal = () => {
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);
    const { isOpen, close } = useExitModal();

    useEffect(() => setIsClient(true), []);

    if (!isClient) {
        return null;
    }

    return (
        <Dialog open={isOpen} onOpenChange={close}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <div className="flex items-center w-full justify-center mb-5">
                        <Image
                        src="https://res.cloudinary.com/dkahuuvrf/image/upload/v1754542970/come_back_hv9xvn.png"
                        alt="Mascot"
                        height={150}
                        width={150}
                        />
                    </div>
                    <DialogTitle className="text-center font-bold text-2xl">
                        Don't leave me!!!
                    </DialogTitle>
                    <DialogDescription className="text-center text-base">
                        You are about to leave the lesson, Are you sure?
                    </DialogDescription>
                    <DialogFooter className="mb-4">
                        <div className="flex flex-col gap-y-4 w-full">
                            <Button variant="primary" 
                            className="w-full" 
                            size="lg"
                            onClick={close}>
                                Keep learning
                            </Button>
                            <Button variant="dangeroutline" 
                            className="w-full" 
                            size="lg"
                            onClick={() =>{
                                close();
                                router.push("/learn");
                            } }>
                                Leave!!!
                            </Button>
                        </div>
                    </DialogFooter>
                </DialogHeader>
            </DialogContent>

        </Dialog>
    )
};