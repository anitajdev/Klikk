import { User } from "@prisma/client"
import Birthdays from "./Birthdays"
import FriendRequest from "./FriendRequest"
import { Suspense } from "react"
import Ad from "../Ad"
import UserInfoCard from "./UserInfoCard"
import UserMediaCard from "./UserMediaCard"

const RightMenu = ({ user }: { user?: User }) => {
  return (
    <div className="flex flex-col gap-6">
      {user ? (
        <>
          <Suspense fallback="loading...">
            <UserInfoCard user={user} />
          </Suspense>
          <Suspense fallback="loading...">
            <UserMediaCard user={user} />
          </Suspense>
        </>
      ) : null }
      <FriendRequest />
      <Birthdays />
      <Ad size="md"/>
    </div>
  )
}

export default RightMenu