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
import { useHeartsModal } from "@/app/store/use-hearts-modal"; 

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const HeartsModal = () => {
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);
    const { isOpen, close } = useHeartsModal();

    useEffect(() => setIsClient(true), []);

const onClick = () => {
    close();
    router.push("/shop");
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
                        src="https://res.cloudinary.com/dkahuuvrf/image/upload/v1754542963/ran_out_diqtrh.png"
                        alt="Mascot"
                        height={150}
                        width={150}
                        />
                    </div>
                    <DialogTitle className="text-center font-bold text-2xl">
                        Ran out of Hearts!
                    </DialogTitle>
                    <DialogDescription className="text-center text-base">
                        Buy more hearts in store.
                    </DialogDescription>
                    <DialogFooter className="mb-4">
                        <div className="flex flex-col gap-y-4 w-full">
                            <Button variant="primary" 
                            className="w-full" 
                            size="lg"
                            onClick={onClick}>
                                Get more hearts
                            </Button>
                            <Button variant="primaryoutline" 
                            className="w-full" 
                            size="lg"
                            onClick={close}>
                                No Thanks
                            </Button>
                        </div>
                    </DialogFooter>
                </DialogHeader>
            </DialogContent>

        </Dialog>
    )
};