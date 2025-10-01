import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { UserProgress } from "@/components/user-progess";
import { getTopTenUsers, getUserProgress, getUserSubscription } from "@/db/queries";
import Image from "next/image";
import { redirect } from "next/navigation";

const LeaderBoard =async () => {
    const userProgressData = getUserProgress();
    const userSubscriptionData = getUserSubscription();
    const leaderboardData = getTopTenUsers();

    const[
        userProgress,
        userSubscription,
        leaderboard,
    ] = await Promise.all([
        userProgressData,
        userSubscriptionData,
        leaderboardData,
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
                    src="https://res.cloudinary.com/dkahuuvrf/image/upload/v1754540869/lead_hpshlh.png"
                    alt="shop"
                    height={90}
                    width={90}
                    />
                    <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">
                        Leaderboard
                    </h1>
                    <p className="text-muted-foreground text-center text-lg mb-6">
                        Where do you stand in the Ummah.
                    </p>
                    <Separator className="mb-4 h-0.5 rounded-full"/>
                    {leaderboard.map((userProgress, index) => (
                        <div 
                        key={userProgress.userId}
                        className="flex items-center w-full p-2 px-4 rounded-xl hover:bg-gray-200/50">
                            <p className="font-bold text-lime-700 mr-4">{index + 1}</p>
                            <Avatar
                            className="border bg-gray-500 h-12 w-12 ml-3 mr-6">
                                <AvatarImage 
                                className="object-cover"
                                src={userProgress.userImageSrc}
                                />
                            </Avatar>
                            <p className="font-bold text-neutral-800 flex-1">
    {userProgress.userName?.trim() && userProgress.userName.toLowerCase() !== "user"
        ? userProgress.userName
        : "A Rightous Muslim"}
</p>

                            <p className="text-muted-foreground">
                                {userProgress.points} XP
                            </p>
                        </div>
                    ))}

                </div>
            </FeedWrapper>
        </div>
    )
}

export default LeaderBoard;