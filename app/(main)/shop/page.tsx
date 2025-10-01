import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progess";
import { getUserProgress, getUserSubscription } from "@/db/queries";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Items } from "./items";

const ShopPage =async () => {
    const userProgressData = getUserProgress();
    const userSubscriptionData = getUserSubscription();
    const[
        userProgress,
        userSubscription,
    ] = await Promise.all([
        userProgressData,
        userSubscriptionData,
    ]);

    if (!userProgress || !userProgress.activeCourse) {
        redirect("/courses");
    }

    const isPro = !!userSubscription?.isActive
    return (
        <div className="flex flex-row-reverse gap-[48px]">
            <StickyWrapper>
                <UserProgress 
                activeCourse={userProgress.activeCourse}
                hearts={userProgress.hearts}
                points={userProgress.points}
                hasActiveSubscription={isPro}
                />
            </StickyWrapper>
            <FeedWrapper>
                <div className="w-full flex flex-col items-center">
                    <Image 
                    src="https://res.cloudinary.com/dkahuuvrf/image/upload/v1754540872/shop_jfsuph.png"
                    alt="shop"
                    height={90}
                    width={90}
                    />
                    <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">
                        Shop
                    </h1>
                    <p className="text-muted-foreground text-center text-lg mb-6">
                        Spend your Halal income on Halal things.
                    </p>
                    <Items 
                    hearts={userProgress.hearts}
                    points={userProgress.points}
                    hasActiveSubscription={isPro}
                    />
                </div>
            </FeedWrapper>
        </div>
    )
}

export default ShopPage;