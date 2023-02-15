import { DefaultData } from "../types/DefaultData";
import { defaultData } from "../lib/defaultData";
import { Avatar } from "./Avatar";
import { StatsContainer } from "../containers/StatsContainer";
import { LinksContainer } from "../containers/LinksContainer";
import moment from "moment";

export const ProfileCard = (userData: DefaultData) => {
    return (
        <div className="mt-4 mx-6 bg-white tablet:h-[481px] tablet:w-[573px] desktop:h-[444px] desktop:w-[730px] shadow-md rounded-xl ">
            <div className="grid grid-cols-3 p-6 desktop:grid desktop:grid-cols-3 desktop:p-6">
                {userData ? (
                    <Avatar avatarUrl={userData.avatar_url || defaultData.avatar_url} />
                ) : (
                    <Avatar avatarUrl={defaultData.avatar_url} />
                )}
                <div className="col-span-2 desktop:flex">
                    <div>
                <div className="text-black text-m desktop:text-[26px] desktop:mt-4">{userData?.name || defaultData.name } </div>
                    <div className="text-blue text-xs col-span-2 desktop:text-m desktop:font-normal desktop:mt-4 mr-6">{userData?.login || defaultData.login}</div>
                    </div>
                   
                    <div className="text-bluishGrey text-xs col-span-2 desktop:mt-6 desktop:pl-40">Joined {moment(userData?.created_at || defaultData.created_at).format('DD MMM yyy')}</div>
                    </div>
                <div className="mt-6 text-bluishGrey text-s col-span-3 desktop:text-m desktop:mr-6 desktop:col-span-2">{userData?.bio || "This user has no bio"}</div>

                <StatsContainer {...userData} />
                <LinksContainer {...userData} />
                </div>
        </div>
    )
};