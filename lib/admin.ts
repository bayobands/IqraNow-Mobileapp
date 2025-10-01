import { auth } from "@clerk/nextjs/server";

const allowedIds = [
    "user_2wWnYhw52DiqLe7RsLakPTF56Wq", "user_2wb1KY9cqGn5o1vcAIbciB6uYCW"
];

export const getIsAdmin = async() => {
    const { userId } = await auth();

    if (!userId) {
        return false;
    }
    return allowedIds.indexOf(userId) !== -1
}