import { ClerkLoading, ClerkLoaded, SignedIn, SignedOut, SignInButton, UserButton, } from "@clerk/nextjs";
import Image from "next/image";
import { Loader } from "lucide-react";
import { Button } from "@/components/ui/button"

export const Header = () => {
    return(
        <header className="h-20 w-full border-b-2 border-slate-200 px-4">
            <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full ">
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <Image src="https://res.cloudinary.com/dkahuuvrf/image/upload/v1754541484/ahmad_cacdwn.png" height={80} width={80} alt="Mascot"/>
                    <h1 className="text-2xl fontextrabold text-green-600 tracking-wide">
                        Iqra-Now
                    </h1>
                </div>
                <ClerkLoading>
                        <Loader className="h-5 w-5 text-muted-foreground animate-spin"/>
                    </ClerkLoading>
                    <ClerkLoaded>
                        <SignedIn>
                        <UserButton />
                        </SignedIn>
                        <SignedOut>
                            <SignInButton 
                            mode="modal"
                            forceRedirectUrl="/learn" 
                            fallbackRedirectUrl="/learn"
                            >
                                <Button size="lg" variant="ghost">
                                    Login
                                </Button>

                            </SignInButton>
                        </SignedOut>
                    </ClerkLoaded>
            </div>
        </header>
    );
};