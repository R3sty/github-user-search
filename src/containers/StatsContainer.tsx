import { DefaultData } from "../types";
import { Stats } from "../components/Stats";
import { defaultData } from "../lib/defaultData";

type defaultData = Pick<DefaultData, 'followers' | 'following' | 'public_repos'>

export const StatsContainer = (userData: defaultData) => {
    return (
        <div className="flex flex-col-3 justify-evenly text-center mt-6 bg-lightGrey rounded-lg py-6 px-4 col-span-3 desktop:col-span-2 desktop:mr-6 dark:bg-blackDm">
            <Stats stats="Repos"
                data={userData?.followers || defaultData.public_repos} />
            <Stats stats="Followers"
                data={userData?.followers || defaultData.followers} />
            <Stats stats="Following"
            data ={userData?.following || defaultData.following}/>
        </div>
    )
}