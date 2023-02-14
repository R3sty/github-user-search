import { DefaultData } from "../types";
import { Stats } from "../components/Stats";

type StatsProps = Pick<DefaultData, 'followers' | 'following' | 'public_repos'>

export const StatsContainer = (userData: StatsProps) => {
    return (
        <div className="flex flex-col-3 justify-evenly text-center mt-6 bg-lightGrey rounded-lg py-6 px-4 col-span-3 desktop:col-span-2 desktop:mr-6">
            <Stats stats="Repos"
                data={userData?.public_repos} />
            <Stats stats="Followers"
                data={userData?.followers} />
            <Stats stats="Following"
            data ={userData?.following}/>
        </div>
    )
}