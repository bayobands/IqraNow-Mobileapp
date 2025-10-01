import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";
import { ArrowLeft } from "lucide-react";
import {
    ClerkLoading,
    ClerkLoaded,
    UserButton,
} from "@clerk/nextjs";
import {Loader} from "lucide-react";

type Props = {
    className?: string;
};

export const Sidebar = ({ className } :Props) => {
    return(
        <div className={cn("flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 bg-gray-300 flex-col", className, )}>
            <Link href="/">
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <Image src="https://res.cloudinary.com/dkahuuvrf/image/upload/v1754541484/ahmad_cacdwn.png" height={80} width={80} alt="Mascot"/>
                    <h1 className="text-2xl fontextrabold text-green-650 tracking-wide">
                        Iqra-Now
                    </h1>
                </div>
            </Link>
            <div className="flex flex-col gap-y-2 flex-1">
                <SidebarItem 
                href="/learn" 
                label="learn"
                iconSrc="https://res.cloudinary.com/dkahuuvrf/image/upload/v1754540866/learn_flxwm8.png"
                />
                <SidebarItem 
                href="/leaderboard" 
                label="leaderboard"
                iconSrc="https://res.cloudinary.com/dkahuuvrf/image/upload/v1754540869/lead_hpshlh.png"
                />
                <SidebarItem 
                href="/shop" 
                label="shop"
                iconSrc="https://res.cloudinary.com/dkahuuvrf/image/upload/v1754540872/shop_jfsuph.png"
                />
                <SidebarItem 
                href="/studyguide" 
                label="studyguide"
                iconSrc="https://res.cloudinary.com/dkahuuvrf/image/upload/v1754540874/study_pug6fh.png"
                />
                <SidebarItem 
                href="/birthday" 
                label="birthday"
                iconSrc="https://res.cloudinary.com/dkahuuvrf/image/upload/v1754540862/cake_etioz6.png"
                />
                <SidebarItem 
                href="/sheikh-ahmad" 
                label="sheikh-ahmad"
                iconSrc="https://res.cloudinary.com/dkahuuvrf/image/upload/v1754541484/ahmad_cacdwn.png"
                />
            </div>
<div className="p-4">
  <ClerkLoading>
    <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
  </ClerkLoading>
  <ClerkLoaded>
    <Link
      href="/"
      className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900"
    >
      <ArrowLeft className="h-4 w-4" />
      Back to home
    </Link>
  </ClerkLoaded>
</div>
        </div>
    );
};